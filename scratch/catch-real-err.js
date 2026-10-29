const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const indexHtml = fs.readFileSync('index.html', 'utf8');

const debugScript = `
<script>
window.onerror = function(msg, url, line, col, error) {
  var d = document.createElement('pre');
  d.id = "REAL_JS_ERR";
  d.textContent = msg + ' at ' + url + ':' + line + ':' + col;
  document.body.appendChild(d);
};
</script>
`;

let testHtml = indexHtml.replace('<head>', '<head>' + debugScript);
fs.writeFileSync('scratch/snap-catch-err.html', testHtml, 'utf8');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=2000',
  '--dump-dom',
  'file:///' + path.resolve('scratch/snap-catch-err.html').replace(/\\/g, '/')
]);

const dom = res.stdout.toString();
const m = dom.match(/<pre id="REAL_JS_ERR">([\s\S]*?)<\/pre>/);
console.log('Real JS Error:', m ? m[1] : 'None');

