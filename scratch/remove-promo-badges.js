const fs = require('fs');

function cleanBadges(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove the badges: Rápido, Ahorro, Ahorro, Efectivo
  content = content.replace(/\s*<span class="m-badge" style="background:#e0f2fe; color:#0369a1;">Rápido<\/span>/g, '');
  content = content.replace(/\s*<span class="m-badge" style="background:#dcfce7; color:#15803d;">Ahorro<\/span>/g, '');
  content = content.replace(/\s*<span class="m-badge" style="background:#fef3c7; color:#b45309;">Efectivo<\/span>/g, '');

  // Remove m-sublines from payment method headers
  content = content.replace(/\s*<span class="m-subline">Pago al contado o en cuotas · Tarjeta nacional o internacional<\/span>/g, '');
  content = content.replace(/\s*<span class="m-subline">Paga en segundos con tu tarjeta vinculada y autenticación SMS<\/span>/g, '');
  content = content.replace(/\s*<span class="m-subline">Bi en Línea · Descuento aplicado por pago sin tarjeta<\/span>/g, '');
  content = content.replace(/\s*<span class="m-subline">Escanea y transfiere al instante con tu banco participante<\/span>/g, '');
  content = content.replace(/\s*<span class="m-subline">Caja Rural y agencias bancarias · Descuento aplicado<\/span>/g, '');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Cleaned badges and sublines in', filePath);
}

cleanBadges('aurapay-checkout.html');
cleanBadges('ethospay-checkout.html');

