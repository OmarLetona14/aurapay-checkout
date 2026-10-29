const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const indexHtml = fs.readFileSync('index.html', 'utf8');

const testScript = `
<script>
window.addEventListener('load', () => {
  try {
    currentUser = users[0];
    document.getElementById('app-login').classList.add('hidden');
    document.getElementById('app-dashboard').classList.remove('hidden');
    loadMerchantBranding();
    renderTable();
    switchTab('transacciones');

    const tx = transactions[0];
    openLinkQrModal(tx ? tx.transaction_id : null);

    const modal = document.getElementById('modal-qr-backdrop');
    const content = document.getElementById('qr-modal-content');
    
    // Dump modal state
    const info = {
      modalClasses: modal ? modal.className : null,
      modalDisplay: modal ? window.getComputedStyle(modal).display : null,
      modalOpacity: modal ? window.getComputedStyle(modal).opacity : null,
      modalZIndex: modal ? window.getComputedStyle(modal).zIndex : null,
      contentClasses: content ? content.className : null,
      contentTransform: content ? window.getComputedStyle(content).transform : null,
      titleText: document.getElementById('qr-modal-title')?.innerText,
      linkValue: document.getElementById('qr-link-url-input')?.value,
      imgSrc: document.getElementById('qr-modal-img')?.src
    };

    const out = document.createElement('div');
    out.id = 'MODAL_DEBUG';
    out.textContent = JSON.stringify(info);
    document.body.appendChild(out);
  } catch (err) {
    const out = document.createElement('div');
    out.id = 'MODAL_DEBUG';
    out.textContent = JSON.stringify({ error: err.message, stack: err.stack });
    document.body.appendChild(out);
  }
});
</script>
`;

let testHtml = indexHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/debug-modal.html', testHtml, 'utf8');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=2000',
  '--dump-dom',
  'file:///' + path.resolve('scratch/debug-modal.html').replace(/\\/g, '/')
]);

const domOut = res.stdout.toString();
const m = domOut.match(/<div id="MODAL_DEBUG">([\s\S]*?)<\/div>/);
if (m) {
  console.log('Modal Debug:', JSON.parse(m[1]));
} else {
  console.log('MODAL_DEBUG not found. DOM length:', domOut.length);
}

