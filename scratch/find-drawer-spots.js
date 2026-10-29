const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Find in indexHtml where Drawer Header is
const drawerHeadIdx = indexHtml.indexOf('<span class="text-[9px] font-semibold text-gray-400 uppercase tracking-wider block" id="drawer-subtitle">Código de Cobro</span>');
console.log('drawerHeadIdx:', drawerHeadIdx);

// Find in indexHtml where Lifecycle timeline starts
const timelineIdx = indexHtml.indexOf('<!-- Lifecycle timeline -->');
console.log('timelineIdx:', timelineIdx);

// Find in indexHtml where modal-qr-backdrop is
const modalQrIdx = indexHtml.indexOf('id="modal-qr-backdrop"');
console.log('modalQrIdx:', modalQrIdx);

