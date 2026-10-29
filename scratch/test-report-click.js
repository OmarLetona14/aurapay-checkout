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
  switchTab('transacciones');

  // Test clicking the first row in transactions report table
  const tbody = document.getElementById('transactions-report-table-body');
  const firstRow = tbody.children[0];
  
  // Click on the client cell (child 4) or on the tr itself
  firstRow.children[4].click();

  setTimeout(() => {
    const backdrop = document.getElementById('drawer-backdrop');
    const container = document.getElementById('drawer-container');
    const title = document.getElementById('drawer-title');
    
    const info = {
      backdropDisplay: window.getComputedStyle(backdrop).display,
      backdropHidden: backdrop.classList.contains('hidden'),
      drawerIsOpen: !backdrop.classList.contains('hidden'),
      title: title ? title.innerText : null
    };

    const out = document.createElement('div');
    out.id = 'REPORT_CLICK_CHECK';
    out.textContent = JSON.stringify(info);
    document.body.appendChild(out);
  }, 50);
});
</script>
`;

let testHtml = indexHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/test-report-click.html', testHtml, 'utf8');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=2000',
  '--dump-dom',
  'file:///' + path.resolve('scratch/test-report-click.html').replace(/\\/g, '/')
]);

const domOut = res.stdout.toString();
const m = domOut.match(/<div id="REPORT_CLICK_CHECK">([\s\S]*?)<\/div>/);
if (m) {
  console.log('Result in Transacciones view:', JSON.parse(m[1]));
} else {
  console.log('REPORT_CLICK_CHECK not found');
}

