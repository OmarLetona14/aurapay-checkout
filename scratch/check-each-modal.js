const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');

function checkSection(startStr, endStr, name) {
  const s = h.indexOf(startStr);
  const e = h.indexOf(endStr, s + 1);
  const chunk = h.substring(s, e);
  const openDivs = (chunk.match(/<div\b/g) || []).length;
  const closeDivs = (chunk.match(/<\/div>/g) || []).length;
  console.log(`${name}: open=${openDivs}, close=${closeDivs}, diff=${openDivs - closeDivs}`);
}

checkSection('id="modal-fel-pdf-backdrop"', 'id="modal-qr-backdrop"', 'modal-fel-pdf');
checkSection('id="modal-qr-backdrop"', 'id="modal-user-backdrop"', 'modal-qr');
checkSection('id="modal-user-backdrop"', 'id="drawer-backdrop"', 'modal-user');

