const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const indexHtml = fs.readFileSync('index.html', 'utf8');

const debugScript = `
<script>
window.addEventListener('load', () => {
  setTimeout(() => {
    currentUser = users[0];
    document.getElementById('app-login').classList.add('hidden');
    document.getElementById('app-dashboard').classList.remove('hidden');
    loadMerchantBranding();
    renderTable();
    switchTab('transacciones');

    const tx = transactions[0];
    openDrawer(tx);

    setTimeout(() => {
      const backdrop = document.getElementById('drawer-backdrop');
      const container = document.getElementById('drawer-container');
      
      const bRect = backdrop.getBoundingClientRect();
      const cRect = container.getBoundingClientRect();

      const out = document.createElement('pre');
      out.id = 'GEOM_CHECK';
      out.textContent = JSON.stringify({
        backdrop: { display: getComputedStyle(backdrop).display, opacity: getComputedStyle(backdrop).opacity, rect: bRect },
        container: { display: getComputedStyle(container).display, opacity: getComputedStyle(container).opacity, transform: getComputedStyle(container).transform, rect: cRect }
      });
      document.body.appendChild(out);
    }, 200);
  }, 300);
});
</script>
`;

let testHtml = indexHtml.replace('</body>', debugScript + '</body>');
fs.writeFileSync('scratch/snap-wait-geom.html', testHtml, 'utf8');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=3000',
  '--dump-dom',
  'file:///' + path.resolve('scratch/snap-wait-geom.html').replace(/\\/g, '/')
]);

const dom = res.stdout.toString();
const m = dom.match(/<pre id="GEOM_CHECK">([\s\S]*?)<\/pre>/);
console.log('Geom after Tailwind load & timeout:');
console.log(m ? m[1] : 'Not found');

