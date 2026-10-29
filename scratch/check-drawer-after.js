const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
const idx = h.indexOf('id="drawer-backdrop"');
const after = h.substring(idx, idx + 800);
console.log('After drawer-backdrop:');
console.log(after);

