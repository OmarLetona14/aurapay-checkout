const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
const dashIdx = h.indexOf('id="app-dashboard"');
const drawerIdx = h.indexOf('id="drawer-backdrop"');
console.log('dashIdx:', dashIdx, 'drawerIdx:', drawerIdx);
console.log('Is drawer inside dashboard?', drawerIdx > dashIdx);

