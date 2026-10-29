const fs = require('fs');

function applyLargerReceipt(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Replace the CSS for result-overlay, result-card-rich, and details
  // Find from /* ---- Rich Receipt and Result Modals ---- */ to .receipt-products-summary { ... }
  const oldReceiptCssRegex = /\/\* ---- Rich Receipt and Result Modals ---- \*\/[\s\S]*?\.receipt-products-summary,\s*\.receipt-address-summary \{[\s\S]*?\}/;

  if (!oldReceiptCssRegex.test(content)) {
    console.error('Could not match old receipt CSS in', filePath);
    process.exit(1);
  }

  const newReceiptCss = `/* ---- Rich Receipt and Result Modals (Escala ampliada y responsive) ---- */
    .result-card-rich {
      max-width: 520px !important;
      width: 100% !important;
      padding: 32px 28px 24px !important;
      box-sizing: border-box;
      margin: auto;
    }

    .result-icon.success {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      background: var(--teal-100);
      color: var(--teal-500);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    .result-icon.success svg {
      width: 36px;
      height: 36px;
    }

    .result-title {
      font-size: 24px;
      font-weight: 800;
      color: var(--navy-900);
      margin: 0 0 6px;
      line-height: 1.25;
      letter-spacing: -0.02em;
    }

    .receipt-header {
      text-align: center;
      margin-bottom: 18px;
    }

    .receipt-merchant {
      font-size: 16px;
      font-weight: 700;
      color: var(--navy-800);
      margin: 0 0 5px;
    }

    .receipt-email-notice {
      font-size: 13.5px;
      color: var(--ink-600);
      line-height: 1.45;
      margin: 0;
    }

    .receipt-email-notice strong {
      color: var(--ink-900);
      font-weight: 700;
    }

    .auth-highlight-box {
      background: #f0fdf4;
      border: 1.5px dashed #86efac;
      border-radius: 12px;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
    }

    .auth-highlight-left {
      display: flex;
      flex-direction: column;
      gap: 3px;
      text-align: left;
    }

    .auth-highlight-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      color: #166534;
      letter-spacing: .05em;
    }

    .auth-highlight-code {
      font-family: var(--font-mono, monospace);
      font-size: 23px;
      font-weight: 800;
      color: #15803d;
      letter-spacing: .04em;
    }

    .auth-copy-btn {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: #ffffff;
      border: 1px solid #bbf7d0;
      color: #166534;
      padding: 8px 14px;
      border-radius: 8px;
      font-size: 12.5px;
      font-weight: 700;
      cursor: pointer;
      transition: all .15s ease;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
      flex-shrink: 0;
    }

    .auth-copy-btn:hover {
      background: #dcfce7;
      border-color: #86efac;
    }

    .receipt-details-list {
      margin-bottom: 20px;
      border-radius: 12px;
      background: #f8fafc;
      border: 1px solid var(--line);
      padding: 12px 18px;
    }

    .receipt-details-list .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 11px 0;
      border-bottom: 1px solid var(--line);
      font-size: 14px;
      color: var(--ink-600);
    }

    .receipt-details-list .row:last-child {
      border-bottom: none;
    }

    .receipt-val-bold {
      font-weight: 800;
      font-size: 17px;
      color: var(--navy-900);
      font-family: var(--font-mono, monospace);
    }

    .receipt-method-pill {
      background: #ffffff;
      border: 1px solid var(--line);
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 12.5px;
      color: var(--ink-800);
    }

    .receipt-products-summary,
    .receipt-address-summary {
      max-width: 250px;
      text-align: right;
      font-weight: 600;
      font-size: 13px;
      color: var(--ink-800);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* Ajustes específicos en Móvil para comprobante grande y legible */
    @media (max-width: 600px) {
      .result-overlay {
        padding: 24px 16px calc(24px + env(safe-area-inset-bottom, 0px)) !important;
        align-items: center !important;
      }

      .result-card-rich {
        padding: 24px 16px 20px !important;
        border-radius: 16px !important;
      }

      .result-icon.success {
        width: 68px;
        height: 68px;
        margin-bottom: 16px;
      }

      .result-title {
        font-size: 22px;
      }

      .receipt-merchant {
        font-size: 15.5px;
      }

      .receipt-email-notice {
        font-size: 13px;
      }

      .auth-highlight-box {
        padding: 12px 14px;
        margin-bottom: 16px;
      }

      .auth-highlight-code {
        font-size: 21px;
      }

      .receipt-details-list {
        padding: 10px 14px;
        margin-bottom: 18px;
      }

      .receipt-details-list .row {
        font-size: 13.5px;
        padding: 10px 0;
      }

      .receipt-val-bold {
        font-size: 16px;
      }

      .receipt-products-summary,
      .receipt-address-summary {
        max-width: 190px;
      }
    }

    html[data-theme="dark"] .result-card-rich {
      background: #171E27;
      border: 1px solid #232C38;
    }

    html[data-theme="dark"] .receipt-merchant {
      color: #F4EBDD;
    }

    html[data-theme="dark"] .receipt-email-notice {
      color: #94A3B8;
    }

    html[data-theme="dark"] .receipt-email-notice strong {
      color: #F4EBDD;
    }

    html[data-theme="dark"] .auth-highlight-box {
      background: #064e3b33;
      border-color: #059669;
    }

    html[data-theme="dark"] .auth-highlight-label {
      color: #6ee7b7;
    }

    html[data-theme="dark"] .auth-highlight-code {
      color: #34d399;
    }

    html[data-theme="dark"] .auth-copy-btn {
      background: #1e293b;
      border-color: #059669;
      color: #6ee7b7;
    }

    html[data-theme="dark"] .receipt-details-list {
      background: #131A22;
      border-color: #2A333F;
    }

    html[data-theme="dark"] .receipt-details-list .row {
      border-bottom-color: #2A333F;
      color: #94A3B8;
    }

    html[data-theme="dark"] .receipt-val-bold {
      color: #F4EBDD;
    }

    html[data-theme="dark"] .receipt-method-pill {
      background: #1e293b;
      border-color: #334155;
      color: #cbd5e1;
    }`;

  content = content.replace(oldReceiptCssRegex, newReceiptCss);

  // 2. Add action button and footer in #result-approved if not present
  const approvedSectionPattern = /<div class="result-rows receipt-details-list">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<!-- OVERLAY: Pantalla final dedicada para Efectivo -->/;
  
  if (approvedSectionPattern.test(content) && !content.includes('onclick="hideResults()"><span>Listo, finalizar</span>')) {
    const replacement = `<div class="result-rows receipt-details-list">
          <div class="row">
            <span>Total cobrado</span>
            <span id="approved-amount" class="receipt-val-bold">Q 145.00</span>
          </div>
          <div class="row" id="approved-installments-row" style="display:none;">
            <span>Plan de financiamiento</span>
            <span id="approved-installments-val" style="color:var(--teal-600); font-weight:700;">-</span>
          </div>
          <div class="row">
            <span>Método utilizado</span>
            <span id="approved-method-val" class="receipt-method-pill">Visa •••• 4242</span>
          </div>
          <div class="row" id="approved-products-row">
            <span>Concepto / Ítems</span>
            <span id="approved-products-val" class="receipt-products-summary">Café de Especialidad Huehuetenango · 340g</span>
          </div>
          <div class="row" id="approved-shipping-row" style="display:none;">
            <span>Dirección de entrega</span>
            <span id="approved-shipping-val" class="receipt-address-summary">-</span>
          </div>
          <div class="row" id="approved-eta-row" style="display:none;">
            <span>Tiempo estimado</span>
            <span id="approved-eta-val" style="color:#78350f; font-weight:700;">24 a 48 horas hábiles</span>
          </div>
          <div class="row" id="approved-sub-freq-row" style="display:none;">
            <span>Suscripción periódica</span>
            <span id="approved-sub-freq-val" style="font-weight:700;color:#1e40af;">Mensual</span>
          </div>
          <div class="row" id="approved-sub-next-row" style="display:none;">
            <span>Próximo cobro</span>
            <span id="approved-sub-next-val" style="font-weight:700;color:#2563eb;">-</span>
          </div>
        </div>

        <div class="result-actions" style="margin-top: 18px;">
          <button class="pay-btn" onclick="hideResults()" type="button" style="width: 100%; font-size: 15px; font-weight: 700; padding: 13px 20px; border-radius: 10px;">
            <span>Listo, finalizar</span>
          </button>
        </div>
        <div class="ethospay-footer"
          style="display:flex;align-items:center;justify-content:center;gap:6px;padding-top:0;margin-top:14px;font-size:11px;color:var(--ink-400);">
          <span>Procesado por</span>
          <img class="ethos-logo-full" src="ethos_logo_dark_full.png" alt="EthosPay"
            style="height:15px;width:auto;vertical-align:middle;">
        </div>
      </div>
    </div>

    <!-- OVERLAY: Pantalla final dedicada para Efectivo -->`;

    content = content.replace(approvedSectionPattern, replacement);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated receipt styles in', filePath);
}

applyLargerReceipt('aurapay-checkout.html');
applyLargerReceipt('ethospay-checkout.html');

