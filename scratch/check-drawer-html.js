const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
const idx = h.indexOf('id="drawer-container"');
console.log(h.substring(idx - 300, idx + 400));

