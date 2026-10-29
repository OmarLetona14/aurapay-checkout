const fs = require('fs');

let mainJs = fs.readFileSync('main.js', 'utf8');
const isCRLF = mainJs.includes('\r\n');
const eol = isCRLF ? '\r\n' : '\n';

// 1. Add getCheckoutUrlForTx and QR helper functions right before QR modal logic
const qrHelpers = `    // ================= QR CODE & CHECKOUT LINK HELPERS =================
    let currentQrTransaction = null;

    function getCheckoutUrlForTx(txOrId) {
      if (!txOrId) return window.location.href;
      const tx = (typeof txOrId === 'object' && txOrId) ? txOrId : (transactions.find(t => t.transaction_id === txOrId) || { transaction_id: txOrId });
      const baseUrl = window.location.href.split('index.html')[0];
      const params = new URLSearchParams();
      params.set('id', tx.transaction_id || '');
      if (tx.amount) params.set('amount', tx.amount);
      if (tx.client) params.set('client', tx.client);
      if (tx.product && tx.product.title) params.set('concept', tx.product.title);
      if (tx.merchant && tx.merchant.name) params.set('merchant', tx.merchant.name);
      if (tx.phone) params.set('phone', tx.phone);
      return \`\${baseUrl}ethospay-checkout.html?\${params.toString()}\`;
    }
    window.getCheckoutUrlForTx = getCheckoutUrlForTx;

    async function copyQrImageToClipboard(targetImgIdOrEl, btnEl) {
      try {
        let img = null;
        if (typeof targetImgIdOrEl === 'string') {
          img = document.getElementById(targetImgIdOrEl);
        } else if (targetImgIdOrEl instanceof HTMLElement) {
          img = targetImgIdOrEl;
        }
        if (!img) {
          img = document.getElementById('drawer-qr-img') || document.getElementById('qr-modal-img');
        }
        if (!img || !img.src) {
          showToast('Error', 'No se ha generado la imagen del QR.', 'warning');
          return;
        }

        const canvas = document.createElement('canvas');
        const size = 420;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, size, size);

        const qrImg = new Image();
        qrImg.crossOrigin = 'anonymous';

        const doCopy = () => {
          ctx.drawImage(qrImg, 20, 20, size - 40, size - 40);
          canvas.toBlob(async (blob) => {
            if (!blob) {
              fallbackCopyLinkAndDownload();
              return;
            }
            try {
              if (navigator.clipboard && window.ClipboardItem) {
                const item = new ClipboardItem({ 'image/png': blob });
                await navigator.clipboard.write([item]);
                if (btnEl) {
                  const origHtml = btnEl.innerHTML;
                  btnEl.innerHTML = \`<span class="text-emerald-300 font-bold">✓ ¡Imagen QR Copiada!</span>\`;
                  setTimeout(() => { btnEl.innerHTML = origHtml; }, 2200);
                }
                showToast('¡Imagen QR Copiada!', 'La imagen del QR está en tu portapapeles. Pégala directamente (Ctrl+V) en WhatsApp, correo o redes sociales.', 'success');
              } else {
                fallbackCopyLinkAndDownload();
              }
            } catch (err) {
              console.warn('Direct image clipboard write failed:', err);
              fallbackCopyLinkAndDownload();
            }
          }, 'image/png');
        };

        function fallbackCopyLinkAndDownload() {
          const url = (selectedTransaction ? getCheckoutUrlForTx(selectedTransaction) : currentQrUrl) || window.location.href;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url);
          }
          downloadDrawerQrImage();
          if (btnEl) {
            const origHtml = btnEl.innerHTML;
            btnEl.innerHTML = \`<span class="text-amber-300 font-bold">✓ QR Descargado</span>\`;
            setTimeout(() => { btnEl.innerHTML = origHtml; }, 2200);
          }
          showToast('QR Descargado & Enlace Copiado', 'Tu navegador no admite copiado directo de imágenes; se descargó el archivo PNG y se copió el link para compartir.', 'info');
        }

        qrImg.onload = doCopy;
        qrImg.onerror = () => {
          fallbackCopyLinkAndDownload();
        };
        qrImg.src = img.src;
      } catch (e) {
        console.error('Error copying QR image:', e);
        showToast('Aviso', 'Se descargó el QR para compartirlo.', 'info');
      }
    }
    window.copyQrImageToClipboard = copyQrImageToClipboard;

    function copyDrawerQrImage(btn) {
      copyQrImageToClipboard('drawer-qr-img', btn);
    }
    window.copyDrawerQrImage = copyDrawerQrImage;

    function copyDrawerCheckoutUrl(btn) {
      if (!selectedTransaction) return;
      const url = getCheckoutUrlForTx(selectedTransaction);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url);
      }
      if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = \`<span class="text-emerald-600 font-bold">✓ ¡Copiado!</span>\`;
        setTimeout(() => { btn.innerHTML = orig; }, 2000);
      }
      showToast('Enlace Copiado', 'El enlace de pago del pedido se copió al portapapeles.', 'success');
    }
    window.copyDrawerCheckoutUrl = copyDrawerCheckoutUrl;

    function sendDrawerViaWhatsApp() {
      if (!selectedTransaction) return;
      shareQrViaWhatsApp(selectedTransaction);
    }
    window.sendDrawerViaWhatsApp = sendDrawerViaWhatsApp;

    function shareQrViaWhatsApp(txOrId) {
      const tx = (typeof txOrId === 'object' && txOrId) ? txOrId : (transactions.find(t => t.transaction_id === txOrId) || currentQrTransaction || selectedTransaction);
      const url = (tx ? getCheckoutUrlForTx(tx) : currentQrUrl) || window.location.href;
      
      const client = (tx && tx.client) ? tx.client : 'Estimado cliente';
      const concept = (tx && tx.product && tx.product.title) ? tx.product.title : (tx && tx.product ? tx.product : 'tu pedido');
      const amountStr = (tx && tx.amount) ? formatCurrency(tx.amount, tx.currency || 'GTQ') : '';
      const txId = (tx && tx.transaction_id) ? tx.transaction_id : '';
      
      const msg = \`¡Hola \${client}! Te comparto tu código y enlace de pago seguro para \${concept} (\${amountStr}) [Ref: \${txId}]:\\n\\n\${url}\\n\\n¡Puedes escanear el código QR o abrir el enlace para pagar en segundos con tarjeta, banca en línea o billetera móvil!\`;
      
      const waUrl = \`https://api.whatsapp.com/send?text=\${encodeURIComponent(msg)}\`;
      window.open(waUrl, '_blank');
      showToast('WhatsApp Abierto', 'Se ha preparado el mensaje con el enlace de pago listo para enviar.', 'success');
    }
    window.shareQrViaWhatsApp = shareQrViaWhatsApp;

    function downloadDrawerQrImage() {
      const tx = selectedTransaction || currentQrTransaction;
      const txId = tx ? tx.transaction_id : 'pedido';
      downloadQrImage(document.getElementById('drawer-qr-img') || document.getElementById('qr-modal-img'), \`QR_\${txId}.png\`);
    }
    window.downloadDrawerQrImage = downloadDrawerQrImage;

    function downloadQrImage(imgEl, filename = 'codigo_qr.png') {
      if (!imgEl) imgEl = document.getElementById('qr-modal-img') || document.getElementById('drawer-qr-img');
      if (!imgEl || !imgEl.src) {
        showToast('Error', 'No se ha generado el código QR.', 'warning');
        return;
      }
      
      const canvas = document.createElement('canvas');
      const size = 420;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, size, size);

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        ctx.drawImage(img, 20, 20, size - 40, size - 40);
        const dataUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        showToast('Código QR Descargado', \`Se guardó "\${filename}" en tus descargas.\`, 'success');
      };
      img.onerror = () => {
        const a = document.createElement('a');
        a.href = imgEl.src;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        showToast('Código QR Descargado', \`Se guardó "\${filename}".\`, 'success');
      };
      img.src = imgEl.src;
    }
    window.downloadQrImage = downloadQrImage;
`;

// Insert right before '// ================= QR MODAL LOGIC ================='
const searchQrModal = '// ================= QR MODAL LOGIC =================';
if (!mainJs.includes('function getCheckoutUrlForTx')) {
  mainJs = mainJs.replace(searchQrModal, qrHelpers + '\n    ' + searchQrModal);
  console.log('1. Added QR helpers to main.js');
}

// 2. Populate drawer QR in openDrawer
const searchInOpenDrawer = `      const titleEl = document.getElementById('drawer-title');
      if (titleEl) titleEl.innerText = transaction.transaction_id || '-';`;

const replaceInOpenDrawer = `      const titleEl = document.getElementById('drawer-title');
      if (titleEl) titleEl.innerText = transaction.transaction_id || '-';

      // Populate Order QR code & sharing section in drawer
      const drawerQrImg = document.getElementById('drawer-qr-img');
      const drawerQrAmount = document.getElementById('drawer-qr-amount');
      const drawerQrId = document.getElementById('drawer-qr-id');
      const txOrderUrl = getCheckoutUrlForTx(transaction);
      
      if (drawerQrImg) {
        setQrImageWithFallback(drawerQrImg, txOrderUrl);
      }
      if (drawerQrAmount) {
        drawerQrAmount.innerText = formatCurrency(transaction.amount, transaction.currency || 'GTQ');
      }
      if (drawerQrId) {
        drawerQrId.innerText = transaction.transaction_id || '-';
      }`;

if (mainJs.includes(searchInOpenDrawer.replace(/\n/g, eol))) {
  mainJs = mainJs.replace(searchInOpenDrawer.replace(/\n/g, eol), replaceInOpenDrawer.replace(/\n/g, eol));
  console.log('2. Added drawer QR population to openDrawer');
} else {
  console.log('2. Could not match searchInOpenDrawer');
}

// 3. Update openLinkQrModal to support currentQrTransaction and getCheckoutUrlForTx
const searchOpenLinkQr = `    function openLinkQrModal(txId) {
      const tx = transactions.find(t => t.transaction_id === txId);
      const checkoutUrl = window.location.href.split('index.html')[0] + 'aurapay-checkout.html?id=' + txId;
      currentQrUrl = checkoutUrl;`;

const replaceOpenLinkQr = `    function openLinkQrModal(txId) {
      if (!txId && selectedTransaction) txId = selectedTransaction.transaction_id;
      const tx = (typeof txId === 'object' && txId) ? txId : (transactions.find(t => t.transaction_id === txId) || selectedTransaction);
      const checkoutUrl = getCheckoutUrlForTx(tx || txId);
      currentQrUrl = checkoutUrl;
      currentQrTransaction = tx;`;

if (mainJs.includes(searchOpenLinkQr.replace(/\n/g, eol))) {
  mainJs = mainJs.replace(searchOpenLinkQr.replace(/\n/g, eol), replaceOpenLinkQr.replace(/\n/g, eol));
  console.log('3. Updated openLinkQrModal');
} else {
  console.log('3. Could not match searchOpenLinkQr');
}

// 4. Update renderTransactionsReport to include QR icon button in Enlace de Origen column
const searchReportCol = `<button type="button" onclick="event.stopPropagation(); openDrawerFromReport('\${t.transaction_id}')" class="text-xs text-aura-primary font-bold hover:underline font-mono focus:outline-none">\${t.transaction_id}</button>`;
const replaceReportCol = `<div class="flex items-center gap-1.5">
              <button type="button" onclick="event.stopPropagation(); openDrawerFromReport('\${t.transaction_id}')" class="text-xs text-aura-primary font-bold hover:underline font-mono focus:outline-none">\${t.transaction_id}</button>
              <button type="button" onclick="event.stopPropagation(); openLinkQrModal('\${t.transaction_id}')" class="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-aura-primary transition-colors cursor-pointer" title="Ver y compartir código QR de este pedido">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5zM6.75 6.75h.008v.008H6.75V6.75zM6.75 16.5h.008v.008H6.75V16.5zM16.5 6.75h.008v.008H16.5V6.75zM13.5 13.5h.008v.008H13.5V13.5zM13.5 19.5h.008v.008H13.5V19.5zM19.5 13.5h.008v.008H19.5V13.5zM19.5 19.5h.008v.008H19.5V19.5zM16.5 16.5h.008v.008H16.5V16.5z"/></svg>
              </button>
            </div>`;

if (mainJs.includes(searchReportCol)) {
  mainJs = mainJs.replace(searchReportCol, replaceReportCol);
  console.log('4. Added QR icon button to renderTransactionsReport');
} else {
  console.log('4. Could not match searchReportCol');
}

fs.writeFileSync('main.js', mainJs, 'utf8');
console.log('Finished updating main.js');

