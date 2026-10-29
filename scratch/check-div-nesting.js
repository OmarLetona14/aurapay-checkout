const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');

const modalFelIdx = h.indexOf('id="modal-fel-pdf-backdrop"');
const drawerIdx = h.indexOf('id="drawer-backdrop"');

console.log('modal-fel-pdf-backdrop idx:', modalFelIdx);
console.log('drawer-backdrop idx:', drawerIdx);

const chunk = h.substring(modalFelIdx, drawerIdx);
const openDivs = (chunk.match(/<div\b/g) || []).length;
const closeDivs = (chunk.match(/<\/div>/g) || []).length;

console.log('Open divs in between:', openDivs);
console.log('Close divs in between:', closeDivs);
console.log('Difference (missing closing divs):', openDivs - closeDivs);

