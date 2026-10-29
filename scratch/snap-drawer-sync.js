const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artDir = 'C:\\Users\\Omar Letona\\.gemini\\antigravity\\brain\\dd5af267-0200-4dee-964c-123a46ef81e6';
const indexHtml = fs.readFileSync('index.html', 'utf8');

const testScript = `
<script>
window.addEventListener('load', () => {
  currentUser = users[0];
  document.getElementById('app-login').classList.add('hidden');
  document.getElementById('app-dashboard').classList.remove('hidden');
  loadMerchantBranding();
  renderTable();
  switchTab('transacciones');

  // Click first row in transacciones
  const tbody = document.getElementById('transactions-report-table-body');
  tbody.children[0].click();

  // Instant styles and ensure drawer is visible
  const backdrop = document.getElementById('drawer-backdrop');
  const container = document.getElementById('drawer-container');
  backdrop.classList.remove('hidden', 'opacity-0');
  backdrop.classList.add('opacity-100');
  container.classList.remove('translate-x-full');
  container.classList.add('translate-x-0');

  const style = document.createElement('style');
  style.textContent = '* { transition: none !important; animation: none !important; }';
  document.head.appendChild(style);
});
</script>
`;

let testHtml = indexHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/snap-trans-drawer-sync.html', testHtml, 'utf8');

const shotPath = path.join(artDir, 'transacciones-detail-drawer.png');
const url = 'file:///' + path.resolve('scratch/snap-trans-drawer-sync.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1280,900',
  '--screenshot=' + shotPath,
  url
]);

console.log('Transacciones detail screenshot saved:', fs.existsSync(shotPath), fs.statSync(shotPath).size);

