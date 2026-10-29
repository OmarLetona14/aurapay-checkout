const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');
const isCRLF = indexHtml.includes('\r\n');
const eol = isCRLF ? '\r\n' : '\n';

// 1. Add drawer header QR button next to delivery badge
const searchHeaderBadge = `<span id="drawer-delivery-badge" class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border shadow-xs bg-amber-50 text-amber-800 border-amber-200">
              <span id="drawer-delivery-badge-dot" class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              <span id="drawer-delivery-badge-text">En proceso de entrega</span>
            </span>`;

const replaceHeaderBadge = `<span id="drawer-delivery-badge" class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border shadow-xs bg-amber-50 text-amber-800 border-amber-200">
              <span id="drawer-delivery-badge-dot" class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              <span id="drawer-delivery-badge-text">En proceso de entrega</span>
            </span>
            <button id="drawer-header-qr-btn" onclick="openLinkQrModal(selectedTransaction ? selectedTransaction.transaction_id : null)" type="button" class="bg-white hover:bg-gray-50 text-gray-700 border border-gray-250 hover:border-aura-primary/50 text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs transition-colors flex items-center gap-1 cursor-pointer" title="Ver y compartir código QR de este pedido">
              <svg class="w-3.5 h-3.5 text-aura-primary" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5zM6.75 6.75h.008v.008H6.75V6.75zM6.75 16.5h.008v.008H6.75V16.5zM16.5 6.75h.008v.008H16.5V6.75zM13.5 13.5h.008v.008H13.5V13.5zM13.5 19.5h.008v.008H13.5V19.5zM19.5 13.5h.008v.008H19.5V13.5zM19.5 19.5h.008v.008H19.5V19.5zM16.5 16.5h.008v.008H16.5V16.5z"/></svg>
              <span>Código QR</span>
            </button>`;

if (indexHtml.includes(searchHeaderBadge.replace(/\n/g, eol))) {
  indexHtml = indexHtml.replace(searchHeaderBadge.replace(/\n/g, eol), replaceHeaderBadge.replace(/\n/g, eol));
  console.log('1. Added drawer-header-qr-btn');
} else {
  console.log('1. Could not match searchHeaderBadge verbatim');
}

// 2. Add QR Code & Quick Sharing Card inside Drawer Body right before Timeline
const searchDrawerBody = `<div id="drawer-tab-content-technical" class="space-y-6 text-xs">
          
          <!-- Lifecycle timeline -->`;

const drawerQrCardHtml = `<div id="drawer-tab-content-technical" class="space-y-6 text-xs">
          
          <!-- Card: Código QR y Compartir Pedido Individual -->
          <div class="bg-gradient-to-br from-amber-50/50 via-white to-gray-50/60 border border-gray-200/90 rounded-xl p-4 space-y-3.5 shadow-2xs" id="drawer-qr-section">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-aura-primary/10 text-aura-primary flex items-center justify-center">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5zM6.75 6.75h.008v.008H6.75V6.75zM6.75 16.5h.008v.008H6.75V16.5zM16.5 6.75h.008v.008H16.5V6.75zM13.5 13.5h.008v.008H13.5V13.5zM13.5 19.5h.008v.008H13.5V19.5zM19.5 13.5h.008v.008H19.5V13.5zM19.5 19.5h.008v.008H19.5V19.5zM16.5 16.5h.008v.008H16.5V16.5z"/></svg>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-gray-900 leading-tight">Código QR del Pedido</h4>
                  <p class="text-[10px] text-gray-500">Escaneable por el cliente para pagar en segundos</p>
                </div>
              </div>
              <button type="button" onclick="openLinkQrModal(selectedTransaction ? selectedTransaction.transaction_id : null)" class="text-[10.5px] text-aura-primary font-bold hover:underline flex items-center gap-0.5 cursor-pointer">
                <span>Ampliar</span>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
              </button>
            </div>

            <!-- QR Preview + Buttons -->
            <div class="flex flex-col sm:flex-row items-center gap-3 bg-white border border-gray-200/80 rounded-lg p-3">
              <div class="w-24 h-24 bg-white border border-gray-200 rounded-md p-1 flex items-center justify-center shrink-0 shadow-2xs">
                <img id="drawer-qr-img" src="" alt="QR Pedido" class="w-full h-full object-contain">
              </div>
              <div class="min-w-0 flex-1 w-full space-y-2">
                <div class="flex items-center justify-between text-[11px]">
                  <span class="text-gray-500 font-mono" id="drawer-qr-id">chk_...</span>
                  <span class="font-bold text-gray-900 text-xs" id="drawer-qr-amount">Q 0.00</span>
                </div>
                
                <div class="space-y-1.5">
                  <button type="button" id="btn-drawer-copy-qr-img" onclick="copyDrawerQrImage(this)" class="w-full bg-aura-primary hover:bg-aura-primaryHover text-white py-1.5 px-2.5 rounded-md text-[11px] font-bold transition-all shadow-2xs flex items-center justify-center gap-1.5 active:scale-98 cursor-pointer" title="Copia la imagen del QR al portapapeles para pegarla en WhatsApp (Ctrl+V)">
                    <svg class="w-3.5 h-3.5 text-aura-gold" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"/></svg>
                    <span>Copiar Imagen QR</span>
                  </button>

                  <div class="flex gap-1.5">
                    <button type="button" onclick="sendDrawerViaWhatsApp()" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-1 px-2 rounded-md text-[10px] font-semibold transition-colors flex items-center justify-center gap-1 active:scale-98 cursor-pointer" title="Enviar enlace y detalles directamente a WhatsApp">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                      <span>WhatsApp</span>
                    </button>
                    <button type="button" onclick="copyDrawerCheckoutUrl(this)" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 px-2 rounded-md text-[10px] font-semibold transition-colors flex items-center justify-center gap-1 active:scale-98 cursor-pointer" title="Copiar enlace de pago web">
                      <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/></svg>
                      <span>Copiar Link</span>
                    </button>
                    <button type="button" onclick="downloadDrawerQrImage()" class="px-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 rounded-md text-[10px] font-semibold transition-colors flex items-center justify-center active:scale-98 cursor-pointer" title="Descargar imagen PNG del QR">
                      <svg class="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Lifecycle timeline -->`;

if (indexHtml.includes(searchDrawerBody.replace(/\n/g, eol))) {
  indexHtml = indexHtml.replace(searchDrawerBody.replace(/\n/g, eol), drawerQrCardHtml.replace(/\n/g, eol));
  console.log('2. Added drawer-qr-section before timeline');
} else {
  console.log('2. Could not match searchDrawerBody verbatim');
}

// 3. Update Modal QR with Copy Image and WhatsApp buttons
const searchModalButtons = `<div class="space-y-2 pt-1">
        <button type="button" onclick="downloadQrCodeImage()" class="w-full bg-aura-primary hover:bg-aura-primaryHover text-white py-2 px-3 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 active:scale-98">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
          <span>Descargar QR para Imprimir</span>
        </button>
        <button type="button" onclick="openQrCheckoutPreview()" class="w-full bg-white hover:bg-gray-50 text-gray-700 py-1.5 px-3 rounded-lg text-xs font-semibold border border-gray-200 transition-colors flex items-center justify-center gap-1.5">
          <span>Abrir Checkout en nueva pestaña</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
        </button>
      </div>`;

const replaceModalButtons = `<div class="space-y-2 pt-1">
        <!-- Copiar Imagen QR al Portapapeles (Primary Action) -->
        <button type="button" id="btn-modal-copy-qr-img" onclick="copyQrImageToClipboard('qr-modal-img', this)" class="w-full bg-aura-primary hover:bg-aura-primaryHover text-white py-2 px-3 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 active:scale-98 cursor-pointer">
          <svg class="w-4 h-4 text-aura-gold" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"/></svg>
          <span>Copiar Imagen QR al Portapapeles</span>
        </button>

        <!-- Compartir por WhatsApp -->
        <button type="button" onclick="shareQrViaWhatsApp()" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-3 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 active:scale-98 cursor-pointer">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          <span>Compartir por WhatsApp</span>
        </button>

        <div class="flex gap-2">
          <button type="button" onclick="downloadQrCodeImage()" class="flex-1 bg-white hover:bg-gray-50 text-gray-700 py-1.5 px-3 rounded-lg text-xs font-semibold border border-gray-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
            <svg class="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
            <span>Descargar PNG</span>
          </button>
          <button type="button" onclick="openQrCheckoutPreview()" class="flex-1 bg-white hover:bg-gray-50 text-gray-700 py-1.5 px-3 rounded-lg text-xs font-semibold border border-gray-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
            <span>Abrir Checkout</span>
            <svg class="w-3.5 h-3.5 fill-none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
          </button>
        </div>
      </div>`;

if (indexHtml.includes(searchModalButtons.replace(/\n/g, eol))) {
  indexHtml = indexHtml.replace(searchModalButtons.replace(/\n/g, eol), replaceModalButtons.replace(/\n/g, eol));
  console.log('3. Updated modal-qr buttons');
} else {
  console.log('3. Could not match searchModalButtons verbatim');
}

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Finished updating index.html');

