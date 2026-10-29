const fs = require('fs');

// Test assembling the WhatsApp message and clipboard code
function buildWhatsAppMessage(tx, url) {
  const client = (tx && tx.client) ? tx.client : 'Cliente';
  const concept = (tx && tx.product && tx.product.title) ? tx.product.title : (tx && tx.product ? tx.product : 'tu pedido');
  const amount = (tx && tx.amount) ? 'Q ' + Number(tx.amount).toFixed(2) : '';
  const txId = (tx && tx.transaction_id) ? tx.transaction_id : '';
  
  return `¡Hola ${client}! Te comparto el código QR y enlace seguro para realizar tu pago de ${concept} (${amount}) correspondiente a la orden ${txId}:\n\n${url}\n\n¡Puedes pagar escaneando el código QR o abriendo el enlace en tu navegador!`;
}

console.log(buildWhatsAppMessage({ client: 'Carlos Mendoza', product: { title: 'Café de Especialidad' }, amount: 145, transaction_id: 'chk_7x89ab' }, 'https://aurapay.gt/chk_7x89ab'));

