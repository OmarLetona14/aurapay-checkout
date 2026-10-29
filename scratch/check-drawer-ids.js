const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const ids = [
  'drawer-title',
  'drawer-payment-badge',
  'drawer-payment-badge-dot',
  'drawer-payment-badge-text',
  'drawer-free-inventory-btn',
  'drawer-free-inventory-btn-footer',
  'drawer-subtitle',
  'detail-client',
  'detail-phone',
  'detail-desc',
  'detail-product-img-container',
  'detail-merchant',
  'detail-currency',
  'detail-amount',
  'detail-idempotency',
  'detail-modality',
  'detail-net-received',
  'detail-base-amount',
  'detail-list-price',
  'detail-fee-rate',
  'detail-need-invoice',
  'detail-order-number',
  'detail-nit',
  'detail-billing-name',
  'detail-contact-email',
  'detail-shipping-card',
  'detail-shipping-dept',
  'detail-shipping-muni',
  'detail-shipping-address',
  'detail-shipping-notes',
  'detail-shipping-fee',
  'detail-gt-iva-label',
  'detail-gt-iva-amount',
  'detail-gt-iva-regimen-text',
  'detail-tax-regimen-name',
  'detail-tax-base',
  'detail-tax-iva-title',
  'detail-tax-iva-val',
  'detail-tax-retention-val',
  'detail-tax-breakdown-details',
  'detail-token',
  'detail-subscription-card',
  'detail-products-section',
  'detail-products-list',
  'drawer-backdrop',
  'drawer-container'
];

const missing = [];
ids.forEach(id => {
  if (!indexHtml.includes('id=\"' + id + '\"')) {
    missing.push(id);
  }
});

console.log('Total checked:', ids.length);
console.log('Missing IDs:', missing);

