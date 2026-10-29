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

    const backdrop = document.getElementById('drawer-backdrop');
    backdrop.classList.remove('hidden', 'opacity-0');
    backdrop.classList.add('opacity-100');
    
    // Walk parent tree and get display/size
    const chain = [];
    let curr = backdrop;
    while (curr) {
      const cs = window.getComputedStyle(curr);
      chain.push({
        tag: curr.tagName,
        id: curr.id,
        className: curr.className,
        display: cs.display,
        position: cs.position,
        width: cs.width,
        height: cs.height,
        offsetWidth: curr.offsetWidth,
        offsetHeight: curr.offsetHeight,
        rect: curr.getBoundingClientRect()
      });
      curr = curr.parentElement;
    }

    const out = document.createElement('pre');
    out.id = 'CSS_CHAIN';
    out.textContent = JSON.stringify(chain, null, 2);
    document.body.appendChild(out);
  }, 200);
});
</script>
`;

let testHtml = indexHtml.replace('</body>', debugScript + '</body>');
fs.writeFileSync('scratch/snap-inspect-css.html', testHtml, 'utf8');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=2000',
  '--dump-dom',
  'file:///' + path.resolve('scratch/snap-inspect-css.html').replace(/\\/g, '/')
]);

const dom = res.stdout.toString();
const m = dom.match(/<pre id="CSS_CHAIN">([\s\S]*?)<\/pre>/);
console.log('CSS Chain:');
console.log(m ? m[1] : 'Not found');

