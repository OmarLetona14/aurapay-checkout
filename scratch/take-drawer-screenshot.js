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
  renderTransactionsReport();

  // Click first transaction row in dashboard
  const tbody = document.getElementById('transaction-table-body');
  if (tbody && tbody.children.length > 0) {
    tbody.children[0].click();
  }

  // Force animations instant for screenshot
  const style = document.createElement('style');
  style.textContent = '* { transition-duration: 0.001s !important; animation-duration: 0.001s !important; }';
  document.head.appendChild(style);
});
</script>
`;

let testHtml = indexHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/test-drawer-render.html', testHtml, 'utf8');

const screenshotPath = path.join(artDir, 'drawer-opened-screenshot.png');
const url = 'file:///' + path.resolve('scratch/test-drawer-render.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1280,900',
  '--screenshot=' + screenshotPath,
  url
]);

console.log('Screenshot saved:', fs.existsSync(screenshotPath), fs.statSync(screenshotPath).size);

