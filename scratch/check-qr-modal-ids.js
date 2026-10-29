const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
const matches = h.match(/id="[^"]*qr[^"]*"/gi);
console.log('QR IDs in index.html:', matches);

