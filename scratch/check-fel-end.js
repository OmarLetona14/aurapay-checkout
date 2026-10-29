const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');

const s = h.indexOf('id="modal-fel-pdf-backdrop"');
const e = h.indexOf('id="modal-qr-backdrop"');
const chunk = h.substring(s, e);
console.log(chunk.substring(chunk.length - 600));

