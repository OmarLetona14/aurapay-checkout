const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const indexHtml = fs.readFileSync('index.html', 'utf8');

const testScript = `
<script>
window.testErrors = [];
window.addEventListener('error', (e) => {
  window.testErrors.push({
    message: e.message,
    filename: e.filename,
    lineno: e.lineno,
    colno: e.colno,
    stack: e.error ? e.error.stack : null
  });
});

window.addEventListener('load', () => {
  const results = {
    errorsBeforeClick: [...window.testErrors],
    tbodyRows: 0,
    reportRows: 0,
    clickMainRowResult: null,
    drawerOpen: false,
    drawerTitle: null,
    errorsAfterClick: []
  };

  try {
    const tbody = document.getElementById('transaction-table-body');
    results.tbodyRows = tbody ? tbody.children.length : 0;
    
    if (tbody && tbody.children.length > 0) {
      const firstRow = tbody.children[0];
      firstRow.click();
      
      const backdrop = document.getElementById('drawer-backdrop');
      const container = document.getElementById('drawer-container');
      const title = document.getElementById('drawer-title');
      
      results.drawerOpen = backdrop && !backdrop.classList.contains('hidden');
      results.drawerTitle = title ? title.innerText : null;
    }
  } catch(err) {
    results.clickMainRowResult = err.message + '\\n' + err.stack;
  }

  results.errorsAfterClick = [...window.testErrors];

  const out = document.createElement('div');
  out.id = 'TEST_OUTPUT';
  out.textContent = JSON.stringify(results);
  document.body.appendChild(out);
});
</script>
`;

let testHtml = indexHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/test-index-click.html', testHtml, 'utf8');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--dump-dom',
  'file:///' + path.resolve('scratch/test-index-click.html').replace(/\\/g, '/')
]);

const domOut = res.stdout.toString();
const m = domOut.match(/<div id="TEST_OUTPUT">([\s\S]*?)<\/div>/);
if (m) {
  console.log('Result:', JSON.parse(m[1]));
} else {
  console.log('DOM output length:', domOut.length);
  fs.writeFileSync('scratch/dom-dump.html', domOut);
}
