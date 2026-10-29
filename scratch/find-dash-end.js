const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
const dashIdx = h.indexOf('id="app-dashboard"');
const drawerIdx = h.indexOf('id="drawer-backdrop"');
const modalQrIdx = h.indexOf('id="modal-qr-backdrop"');
console.log('dashIdx:', dashIdx);
console.log('modalQrIdx:', modalQrIdx);
console.log('drawerIdx:', drawerIdx);
console.log('Total length:', h.length);

