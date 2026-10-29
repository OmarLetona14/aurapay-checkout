const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');

function checkCount(id) {
  const re = new RegExp(`id="${id}"`, 'g');
  const count = (h.match(re) || []).length;
  console.log(`Count of id="${id}":`, count);
}

checkCount('drawer-backdrop');
checkCount('drawer-container');
checkCount('modal-qr-backdrop');
checkCount('qr-modal-content');

