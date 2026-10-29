const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artDir = 'C:\\Users\\Omar Letona\\.gemini\\antigravity\\brain\\dd5af267-0200-4dee-964c-123a46ef81e6';
const indexHtml = fs.readFileSync('index.html', 'utf8');

// Test 1: Drawer open with QR section
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

  // Click first row in transacciones
  const tbody = document.getElementById('transactions-report-table-body');
  if (tbody && tbody.children.length > 0) {
    tbody.children[0].click();
  }

  // Ensure drawer is visible
  const backdrop = document.getElementById('drawer-backdrop');
  const container = document.getElementById('drawer-container');
  backdrop.classList.remove('hidden', 'opacity-0');
  backdrop.classList.add('opacity-100');
  container.classList.remove('translate-x-full');
  container.classList.add('translate-x-0');
  container.style.transform = 'translateX(0)';

  // Scroll QR section into view inside drawer
  const qrSec = document.getElementById('drawer-qr-section');
  if (qrSec) {
    qrSec.scrollIntoView({ behavior: 'instant', block: 'center' });
  }
});
</script>
`;

let testHtmlDrawer = indexHtml.replace('</body>', testScriptDrawer + '</body>');
fs.writeFileSync('scratch/snap-qr-drawer.html', testHtmlDrawer, 'utf8');

const screenshotDrawerPath = path.join(artDir, 'drawer-individual-qr.png');
const urlDrawer = 'file:///' + path.resolve('scratch/snap-qr-drawer.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1366,900',
  '--screenshot=' + screenshotDrawerPath,
  urlDrawer
]);

console.log('Drawer Screenshot saved:', fs.existsSync(screenshotDrawerPath), fs.statSync(screenshotDrawerPath).size);

// Test 2: Modal QR open with order specific data
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

  // Instantly apply visible state
  const modal = document.getElementById('modal-qr-backdrop');
  const content = document.getElementById('qr-modal-content');
  if (modal) {
    modal.classList.remove('hidden', 'opacity-0');
    modal.classList.add('opacity-100');
  }
  if (content) {
    content.classList.remove('scale-95');
    content.classList.add('scale-100');
    content.style.transform = 'scale(1)';
  }
});
</script>
`;

let testHtmlModal = indexHtml.replace('</body>', testScriptModal + '</body>');
fs.writeFileSync('scratch/snap-qr-modal.html', testHtmlModal, 'utf8');

const screenshotModalPath = path.join(artDir, 'modal-individual-qr.png');
const urlModal = 'file:///' + path.resolve('scratch/snap-qr-modal.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1366,900',
  '--screenshot=' + screenshotModalPath,
  urlModal
]);

console.log('Modal Screenshot saved:', fs.existsSync(screenshotModalPath), fs.statSync(screenshotModalPath).size);
