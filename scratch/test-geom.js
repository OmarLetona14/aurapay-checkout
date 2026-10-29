const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const indexHtml = fs.readFileSync('index.html', 'utf8');

const debugScript = `
<script>
window.onerror = function(msg, url, line, col, error) {
  document.body.innerHTML += '<div id="JS_ERR" style="position:fixed;top:0;left:0;background:red;color:white;z-index:99999;padding:20px;">' + msg + ' line ' + line + '</div>';
};

try {
  currentUser = users[0];
  document.getElementById('app-login').classList.add('hidden');
  document.getElementById('app-dashboard').classList.remove('hidden');
  loadMerchantBranding();
  renderTable();
  switchTab('transacciones');

  const tx = transactions[0];
  openDrawer(tx);

  const backdrop = document.getElementById('drawer-backdrop');
  const container = document.getElementById('drawer-container');
  
  const bRect = backdrop.getBoundingClientRect();
  const cRect = container.getBoundingClientRect();

  const out = document.createElement('div');
  out.id = 'GEOM_CHECK';
  out.style.cssText = 'position:fixed;bottom:0;left:0;background:yellow;color:black;z-index:99999;padding:10px;font-size:14px;';
  out.innerHTML = JSON.stringify({
    backdrop: { display: getComputedStyle(backdrop).display, opacity: getComputedStyle(backdrop).opacity, rect: bRect },
    container: { display: getComputedStyle(container).display, opacity: getComputedStyle(container).opacity, transform: getComputedStyle(container).transform, rect: cRect }
  });
  document.body.appendChild(out);
} catch (e) {
  document.body.innerHTML += '<div style="position:fixed;top:0;left:0;background:red;color:white;z-index:99999;padding:20px;">' + e.message + '</div>';
}
</script>
`;

let testHtml = indexHtml.replace('</body>', debugScript + '</body>');
fs.writeFileSync('scratch/snap-geom.html', testHtml, 'utf8');

const shotPath = path.join('c:\\Users\\Omar Letona\\OneDrive\\Desktop\\Pasarela de pagos\\aurapay-checkout\\scratch', 'geom-snap.png');
const url = 'file:///' + path.resolve('scratch/snap-geom.html').replace(/\\/g, '/');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1440,900',
  '--dump-dom',
  url
]);

const dom = res.stdout.toString();
const m = dom.match(/<div id="GEOM_CHECK"[^>]*>([\s\S]*?)<\/div>/);
const err = dom.match(/<div id="JS_ERR"[^>]*>([\s\S]*?)<\/div>/);

console.log('Error:', err ? err[1] : 'None');
console.log('Geom:', m ? m[1] : 'Not found');

