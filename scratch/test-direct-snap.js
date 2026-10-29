const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artDir = 'C:\\Users\\Omar Letona\\.gemini\\antigravity\\brain\\dd5af267-0200-4dee-964c-123a46ef81e6';
const indexHtml = fs.readFileSync('index.html', 'utf8');

// Injected script runs synchronously at end of body, NOT in window.onload
const directScript = `
<script>
// Immediate synchronous setup
currentUser = users[0];
document.getElementById('app-login').classList.add('hidden');
document.getElementById('app-dashboard').classList.remove('hidden');
loadMerchantBranding();
renderTable();
switchTab('transacciones');

// Open drawer synchronously
const tx = transactions[0];
openDrawer(tx);

// Make drawer immediately 100% visible
const backdrop = document.getElementById('drawer-backdrop');
const container = document.getElementById('drawer-container');
backdrop.classList.remove('hidden', 'opacity-0');
backdrop.classList.add('opacity-100');
backdrop.style.opacity = '1';
backdrop.style.display = 'block';

container.classList.remove('translate-x-full');
container.classList.add('translate-x-0');
container.style.transform = 'none';

// Scroll to QR section
const qrSec = document.getElementById('drawer-qr-section');
if (qrSec) {
  qrSec.scrollIntoView({ behavior: 'instant', block: 'center' });
}
</script>
`;

let testHtml = indexHtml.replace('</body>', directScript + '</body>');
fs.writeFileSync('scratch/snap-drawer-direct.html', testHtml, 'utf8');

const shotPath = path.join(artDir, 'drawer-individual-qr.png');
const url = 'file:///' + path.resolve('scratch/snap-drawer-direct.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1440,900',
  '--screenshot=' + shotPath,
  url
]);

console.log('Saved drawer-individual-qr.png:', fs.existsSync(shotPath), fs.statSync(shotPath).size);

