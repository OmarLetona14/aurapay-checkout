const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artDir = 'C:\\Users\\Omar Letona\\.gemini\\antigravity\\brain\\dd5af267-0200-4dee-964c-123a46ef81e6';
const indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. Drawer open screenshot in Light Mode
const testScriptDrawerLight = `
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

  // Set Light Mode
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', 'light');

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

let htmlDrawerLight = indexHtml.replace('</body>', testScriptDrawerLight + '</body>');
fs.writeFileSync('scratch/snap-qr-drawer-light.html', htmlDrawerLight, 'utf8');

const shotDrawerLightPath = path.join(artDir, 'drawer-individual-qr-light.png');
const urlDrawerLight = 'file:///' + path.resolve('scratch/snap-qr-drawer-light.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1400,900',
  '--virtual-time-budget=2000',
  '--screenshot=' + shotDrawerLightPath,
  urlDrawerLight
]);
console.log('Drawer Light screenshot:', fs.existsSync(shotDrawerLightPath), fs.statSync(shotDrawerLightPath).size);

// 2. Modal QR screenshot in Light Mode
const testScriptModalLight = `
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

  // Set Light Mode
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', 'light');

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

let htmlModalLight = indexHtml.replace('</body>', testScriptModalLight + '</body>');
fs.writeFileSync('scratch/snap-qr-modal-light.html', htmlModalLight, 'utf8');

const shotModalLightPath = path.join(artDir, 'modal-individual-qr-light.png');
const urlModalLight = 'file:///' + path.resolve('scratch/snap-qr-modal-light.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1400,900',
  '--virtual-time-budget=2000',
  '--screenshot=' + shotModalLightPath,
  urlModalLight
]);
console.log('Modal Light screenshot:', fs.existsSync(shotModalLightPath), fs.statSync(shotModalLightPath).size);

