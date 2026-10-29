const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const mainJs = fs.readFileSync('main.js', 'utf8');

console.log('--- Checking drawer markup in index.html ---');
const drawerIdx = indexHtml.indexOf('id=\"drawer-container\"');
const drawerEnd = indexHtml.indexOf('<!-- ================= NOTIFICATION TOAST ================= -->');
console.log('Drawer length in index.html:', drawerEnd - drawerIdx);

