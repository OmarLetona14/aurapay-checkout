const fs = require('fs');
const m = fs.readFileSync('main.js', 'utf8');
const idx = m.indexOf('function showQrModal');
console.log(m.substring(idx, idx + 400));

