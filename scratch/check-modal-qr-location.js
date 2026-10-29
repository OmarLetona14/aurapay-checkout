const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
const idx = h.indexOf('id="modal-qr-backdrop"');
console.log('modal-qr-backdrop index:', idx);
const before = h.substring(Math.max(0, idx - 400), idx);
console.log('Before modal-qr-backdrop:');
console.log(before);

