const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const modalStart = indexHtml.indexOf('id="modal-qr-backdrop"');
const modalEnd = indexHtml.indexOf('<!-- ================= MODAL: EDITAR / CREAR USUARIO ================= -->');
console.log(indexHtml.substring(modalStart, modalEnd));

