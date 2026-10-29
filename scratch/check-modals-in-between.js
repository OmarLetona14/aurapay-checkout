const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');

const modalFelIdx = h.indexOf('id="modal-fel-pdf-backdrop"');
const drawerIdx = h.indexOf('id="drawer-backdrop"');
const chunk = h.substring(modalFelIdx, drawerIdx);

const modals = chunk.match(/id="[^"]*modal[^"]*"/gi);
console.log('Modals in between:', modals);

