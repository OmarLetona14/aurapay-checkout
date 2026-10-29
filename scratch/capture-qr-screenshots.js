const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artDir = 'C:\\Users\\Omar Letona\\.gemini\\antigravity\\brain\\dd5af267-0200-4dee-964c-123a46ef81e6';
const indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. Drawer open screenshot
const testScriptDrawer = `
<script>
window.addEventListener('load', () => {
  const style = document.createElement('style');
  style.textContent = '* { transition: none !important; animation: none !important; }';
  document.head.appendChild(style);

  currentUser = users[0];
  document.getElementById('app-login').classList.add('hidden');
  document.getElementById('app-dashboard').classList.remove('hidden');
  loadMerchantBranding();
  renderTable();
  switchTab('transacciones');

  // Open drawer for first transaction
  const tx = transactions[0];
  openDrawer(tx);

  // Instantly apply active classes
  const backdrop = document.getElementById('drawer-backdrop');
  const container = document.getElementById('drawer-container');
  backdrop.classList.remove('hidden', 'opacity-0');
  backdrop.classList.add('opacity-100');
  backdrop.style.opacity = '1';
  backdrop.style.display = 'block';

  container.classList.remove('translate-x-full');
  container.classList.add('translate-x-0');
  container.style.transform = 'none';

  // Scroll QR section into clear view inside the drawer
  const qrSec = document.getElementById('drawer-qr-section');
  if (qrSec) {
    qrSec.scrollIntoView({ behavior: 'instant', block: 'center' });
  }
});
</script>
`;

let htmlDrawer = indexHtml.replace('</body>', testScriptDrawer + '</body>');
fs.writeFileSync('scratch/snap-qr-drawer-clean.html', htmlDrawer, 'utf8');

const shotDrawerPath = path.join(artDir, 'drawer-individual-qr.png');
const urlDrawer = 'file:///' + path.resolve('scratch/snap-qr-drawer-clean.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1400,900',
  '--virtual-time-budget=2000',
  '--screenshot=' + shotDrawerPath,
  urlDrawer
]);
console.log('Drawer screenshot:', fs.existsSync(shotDrawerPath), fs.statSync(shotDrawerPath).size);

// 2. Modal QR screenshot
const testScriptModal = `
<script>
window.addEventListener('load', () => {
  const style = document.createElement('style');
  style.textContent = '* { transition: none !important; animation: none !important; }';
  document.head.appendChild(style);

  currentUser = users[0];
  document.getElementById('app-login').classList.add('hidden');
  document.getElementById('app-dashboard').classList.remove('hidden');
  loadMerchantBranding();
  renderTable();
  switchTab('transacciones');

  // Open modal directly with transaction
  const tx = transactions[0];
  openLinkQrModal(tx ? tx.transaction_id : null);

  // Instantly apply active classes
  const modal = document.getElementById('modal-qr-backdrop');
  const content = document.getElementById('qr-modal-content');
  if (modal) {
    modal.classList.remove('hidden', 'opacity-0');
    modal.classList.add('opacity-100');
    modal.style.opacity = '1';
    modal.style.display = 'flex';
  }
  if (content) {
    content.classList.remove('scale-95');
    content.classList.add('scale-100');
    content.style.transform = 'none';
  }
});
</script>
`;

let htmlModal = indexHtml.replace('</body>', testScriptModal + '</body>');
fs.writeFileSync('scratch/snap-qr-modal-clean.html', htmlModal, 'utf8');

const shotModalPath = path.join(artDir, 'modal-individual-qr.png');
const urlModal = 'file:///' + path.resolve('scratch/snap-qr-modal-clean.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1400,900',
  '--virtual-time-budget=2000',
  '--screenshot=' + shotModalPath,
  urlModal
]);
console.log('Modal screenshot:', fs.existsSync(shotModalPath), fs.statSync(shotModalPath).size);

