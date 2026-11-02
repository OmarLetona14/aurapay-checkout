const fs = require('fs');

// 1. Update main.js
let mainJs = fs.readFileSync('main.js', 'utf8');

// Line 242
mainJs = mainJs.replace("type: 'Caja Rural',", "type: 'Efectivo',");

// Line 1208
mainJs = mainJs.replace("// 3. Cobros Banca Virtual / Caja Rural", "// 3. Cobros Banca Virtual / Efectivo");

// Line 1318
mainJs = mainJs.replace("raw.includes('rural') || raw.includes('efectivo')", "raw.includes('efectivo')");

// Line 1351
mainJs = mainJs.replace("if (singleType === 'Caja Rural') singleType = 'Efectivo';\r\n", "");
mainJs = mainJs.replace("if (singleType === 'Caja Rural') singleType = 'Efectivo';\n", "");

// Line 3658
mainJs = mainJs.replace("modality.includes('Rural') ||\r\n", "");
mainJs = mainJs.replace("modality.includes('Rural') ||\n", "");

fs.writeFileSync('main.js', mainJs, 'utf8');
console.log('main.js updated');

// 2. Update checkout files
function updateCheckout(filename) {
  let content = fs.readFileSync(filename, 'utf8');

  // 1525
  content = content.replace(
    '/* ---- Código de pago en efectivo (Caja Rural) ---- */',
    '/* ---- Código de pago en efectivo (Puntos autorizados) ---- */'
  );

  // 4460
  content = content.replace(
    'por Pay Rural) para procesar los pagos que inicies en el futuro.',
    'por la pasarela) para procesar los pagos que inicies en el futuro.'
  );

  // 4938
  content = content.replace(
    'Acude a cualquier Caja Rural, indica que pagarás un servicio con código, muestra\r\n                        este número y entrega el efectivo exacto.',
    'Acude a cualquier agencia o punto autorizado (Agentes Bi y Cajas Bi), indica que pagarás un convenio con código de servicio, muestra\r\n                        este número y entrega el efectivo exacto.'
  );
  content = content.replace(
    'Acude a cualquier Caja Rural, indica que pagarás un servicio con código, muestra\n                        este número y entrega el efectivo exacto.',
    'Acude a cualquier agencia o punto autorizado (Agentes Bi y Cajas Bi), indica que pagarás un convenio con código de servicio, muestra\n                        este número y entrega el efectivo exacto.'
  );

  // 5085
  content = content.replace(
    'Banco Industrial: #4892 · Banrural: #8831',
    'Banco Industrial: #4892'
  );
  content = content.replace(
    '<span>Convenios Bancarios</span>',
    '<span>Convenio Bancario</span>'
  );

  // 5089-5090
  content = content.replace(
    'Agentes Bi, Cajas Bi, Agentes Banrural y Caja\r\n              Rural',
    'Agentes Bi, Cajas Bi y agencias autorizadas'
  );
  content = content.replace(
    'Agentes Bi, Cajas Bi, Agentes Banrural y Caja\n              Rural',
    'Agentes Bi, Cajas Bi y agencias autorizadas'
  );

  // 5447-5456
  content = content.replace(
    "// Caja Rural\r\n      'Pago en efectivo con Caja Rural': 'Cash payment with Caja Rural',",
    "// Pagos en efectivo\r\n      'Pago en efectivo': 'Cash payment',"
  );
  content = content.replace(
    "// Caja Rural\n      'Pago en efectivo con Caja Rural': 'Cash payment with Caja Rural',",
    "// Pagos en efectivo\n      'Pago en efectivo': 'Cash payment',"
  );

  content = content.replace(
    "'Acude a un Caja Rural cercano con tu código.': 'Go to a nearby Caja Rural with your code.',",
    "'Acude a un punto de pago autorizado con tu código.': 'Go to a nearby authorized payment point with your code.',"
  );

  content = content.replace(
    "'Acude a cualquier Caja Rural, indica que pagarás un servicio con código, muestra este número y entrega el efectivo exacto.': 'Go to any Caja Rural, say you will pay a service with a code, show this number and hand over the exact cash.',",
    "'Acude a cualquier agencia o punto autorizado (Agentes Bi y Cajas Bi), indica que pagarás un convenio con código de servicio, muestra este número y entrega el efectivo exacto.': 'Go to any authorized agency or banking point, say you will pay a service agreement with a code, show this number and hand over the exact cash.',"
  );

  // 6561
  content = content.replace(
    '// Caja Rural: esto NO es un pago instantáneo',
    '// Pagos en efectivo: esto NO es un pago instantáneo'
  );

  // 6949
  content = content.replace(
    '`*Puntos de cobro:* Agentes Bi, Cajas Bi, Banrural y Caja Rural.\\n\\n`',
    '`*Puntos de cobro:* Agentes Bi, Cajas Bi y agencias autorizadas.\\n\\n`'
  );

  // 7268
  content = content.replace(
    'pasarela Pay Rural.',
    'pasarela EthosPay.'
  );

  fs.writeFileSync(filename, content, 'utf8');
  console.log(`${filename} updated`);
}

updateCheckout('aurapay-checkout.html');
updateCheckout('ethospay-checkout.html');

// 3. Update link-pago_7.html
if (fs.existsSync('link-pago_7.html')) {
  let linkHtml = fs.readFileSync('link-pago_7.html', 'utf8');
  linkHtml = linkHtml.replace(/\bPay Rural\b/g, 'EthosPay');
  linkHtml = linkHtml.replace(/<span class="ap-a">Pay<\/span><span class="ap-b">Rural<\/span>/g, '<span class="ap-a">Ethos</span><span class="ap-b">Pay</span>');
  linkHtml = linkHtml.replace(/\bCaja Rural\b/g, 'Pago en Efectivo');
  linkHtml = linkHtml.replace(/boleta_caja_rural_/g, 'boleta_efectivo_');
  fs.writeFileSync('link-pago_7.html', linkHtml, 'utf8');
  console.log('link-pago_7.html updated');
}

