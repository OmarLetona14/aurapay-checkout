const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const indexHtml = fs.readFileSync('index.html', 'utf8');

const testScript = `
<script>
window.addEventListener('load', () => {
  currentUser = users[0];
  document.getElementById('app-login').classList.add('hidden');
  document.getElementById('app-dashboard').classList.remove('hidden');
  loadMerchantBranding();
  renderTable();

  // Test clicking the first row
  const tbody = document.getElementById('transaction-table-body');
  const firstRow = tbody.children[0];
  firstRow.click();

  // Wait 50ms for the setTimeout in openDrawer
  setTimeout(() => {
    const backdrop = document.getElementById('drawer-backdrop');
    const container = document.getElementById('drawer-container');
    const title = document.getElementById('drawer-title');
    const client = document.getElementById('detail-client');
    const amount = document.getElementById('detail-amount');
    
    const info = {
      backdropDisplay: window.getComputedStyle(backdrop).display,
      backdropOpacity: window.getComputedStyle(backdrop).opacity,
      containerTransform: window.getComputedStyle(container).transform,
      title: title.innerText,
      client: client.innerText,
      amount: amount.innerText
    };

    const out = document.createElement('div');
    out.id = 'DRAWER_CHECK';
    out.textContent = JSON.stringify(info);
    document.body.appendChild(out);
  }, 50);
});
</script>
`;

let testHtml = indexHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/test-drawer-check.html', testHtml, 'utf8');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=2000',
  '--dump-dom',
  'file:///' + path.resolve('scratch/test-drawer-check.html').replace(/\\/g, '/')
]);

const domOut = res.stdout.toString();
const m = domOut.match(/<div id="DRAWER_CHECK">([\s\S]*?)<\/div>/);
if (m) {
  console.log('Result:', JSON.parse(m[1]));
} else {
  console.log('DRAWER_CHECK not found');
}

