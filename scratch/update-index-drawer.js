const fs = require('fs');

// 1. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

const authSectionHtml = `
          <!-- Bank Authorization / Payment Settlement Details (when transaction is paid) -->
          <div class="border-t border-gray-100 pt-5 space-y-3 hidden" id="detail-bank-auth-section">
            <div class="flex items-center justify-between">
              <h4 class="text-[9px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                <span>Comprobante de Liquidación & Autorización</span>
              </h4>
              <span class="bg-emerald-50 text-emerald-700 font-bold text-[9.5px] px-2 py-0.5 rounded border border-emerald-200">
                Transacción Aprobada
              </span>
            </div>
            <div class="bg-emerald-50/30 border border-emerald-200/60 rounded-lg p-3 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span class="text-gray-400 block mb-0.5 text-[10px]">Cód. Autorización</span>
                <span class="font-mono font-bold text-gray-900 text-xs" id="detail-auth-number">-</span>
              </div>
              <div>
                <span class="text-gray-400 block mb-0.5 text-[10px]">Cód. Auditoría</span>
                <span class="font-mono font-bold text-gray-900 text-xs" id="detail-audit-number">-</span>
              </div>
              <div>
                <span class="text-gray-400 block mb-0.5 text-[10px]">Referencia de Pago</span>
                <span class="font-mono font-semibold text-gray-800 text-[11px]" id="detail-reference-number">-</span>
              </div>
              <div>
                <span class="text-gray-400 block mb-0.5 text-[10px]">Fecha de Liquidación</span>
                <span class="font-semibold text-gray-800 text-[11px]" id="detail-payment-date">-</span>
              </div>
            </div>
          </div>
`;

if (!indexHtml.includes('id=\"detail-bank-auth-section\"')) {
  indexHtml = indexHtml.replace(
    '<!-- Billing and Order Metadata -->',
    authSectionHtml + '\n          <!-- Billing and Order Metadata -->'
  );
  fs.writeFileSync('index.html', indexHtml, 'utf8');
  console.log('Added detail-bank-auth-section to index.html');
} else {
  console.log('detail-bank-auth-section already present in index.html');
}

