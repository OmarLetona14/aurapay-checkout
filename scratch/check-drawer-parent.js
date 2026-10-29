const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
const idx = h.indexOf('id="drawer-backdrop"');
console.log('drawer-backdrop index:', idx);
const before = h.substring(Math.max(0, idx - 400), idx);
console.log('Before drawer-backdrop:');
console.log(before);
