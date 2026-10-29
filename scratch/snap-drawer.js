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

  // Instant transitions for screenshot capture
  const style = document.createElement('style');
  style.textContent = '* { transition-duration: 0.001s !important; animation-duration: 0.001s !important; }';
  document.head.appendChild(style);
});
</script>
`;

let testHtml = indexHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/snap-trans-drawer.html', testHtml, 'utf8');

const shotPath = path.join(artDir, 'transacciones-detail-drawer.png');
const url = 'file:///' + path.resolve('scratch/snap-trans-drawer.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1280,900',
  '--screenshot=' + shotPath,
  url
]);

console.log('Transacciones detail screenshot saved:', fs.existsSync(shotPath), fs.statSync(shotPath).size);

