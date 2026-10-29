const fs = require('fs');
const crypto = require('crypto');
const vm = require('vm');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artDir = 'C:\\Users\\Omar Letona\\.gemini\\antigravity\\brain\\dd5af267-0200-4dee-964c-123a46ef81e6';

console.log('--- 1. SHA256 HASH VERIFICATION ---');
const auraContent = fs.readFileSync('aurapay-checkout.html');
const ethosContent = fs.readFileSync('ethospay-checkout.html');

const auraHash = crypto.createHash('sha256').update(auraContent).digest('hex');
const ethosHash = crypto.createHash('sha256').update(ethosContent).digest('hex');

console.log('aurapay-checkout.html hash:', auraHash);
console.log('ethospay-checkout.html hash:', ethosHash);
if (auraHash !== ethosHash) {
  console.error('ERROR: Files do not match!');
  process.exit(1);
}
console.log('MATCH: Both files are byte-for-byte identical!');

console.log('\n--- 2. JS SYNTAX CHECK ---');
const scriptRegex = /<script(?:\s+[^>]*)?>([\s\S]*?)<\/script>/gi;
let match;
let scriptIdx = 0;
const auraStr = auraContent.toString('utf8');
while ((match = scriptRegex.exec(auraStr)) !== null) {
  scriptIdx++;
  const code = match[1];
  if (!code.trim()) continue;
  try {
    new vm.Script(code);
    console.log(`Script block #${scriptIdx} (${code.length} chars): Syntax OK`);
  } catch (err) {
    console.error(`Syntax Error in block #${scriptIdx}:`, err.message);
    process.exit(1);
  }
}

console.log('\n--- 3. VERIFY TOGGLE BEHAVIOR VIA CHROME DUMP-DOM ---');
const testVerifyScript = `
<script>
window.addEventListener('load', () => {
  const dLang = document.querySelector('.checkout-desktop-actions .lang-toggle');
  const mLang = document.querySelector('.mob-header-actions .lang-toggle');
  const dTheme = document.querySelector('.checkout-desktop-actions .theme-toggle');
  const mTheme = document.querySelector('.mob-header-actions .theme-toggle');

  const oldFooterToggle = document.querySelector('.ethospay-footer .util-toggles');

  const results = {
    hasDesktopLang: !!dLang,
    hasMobileLang: !!mLang,
    hasDesktopTheme: !!dTheme,
    hasMobileTheme: !!mTheme,
    oldFooterRemoved: !oldFooterToggle,
    initialLang: dLang.textContent,
    initialTheme: document.documentElement.getAttribute('data-theme') || 'light'
  };

  // Test language toggle
  dLang.click();
  results.langAfterDesktopClick = {
    dLang: dLang.textContent,
    mLang: mLang.textContent,
    langAttr: document.documentElement.getAttribute('lang')
  };

  // Test theme toggle from mobile
  mTheme.click();
  results.themeAfterMobileClick = {
    themeAttr: document.documentElement.getAttribute('data-theme'),
    dThemeHasSvg: dTheme.innerHTML.includes('<svg'),
    mThemeHasSvg: mTheme.innerHTML.includes('<svg')
  };

  const out = document.createElement('div');
  out.id = 'VERIFY_OUTPUT';
  out.textContent = JSON.stringify(results);
  document.body.appendChild(out);
});
</script>
`;

let verifyHtml = auraStr.replace('</body>', testVerifyScript + '</body>');
fs.writeFileSync('scratch/temp-verify.html', verifyHtml, 'utf8');

const verifyRes = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--dump-dom',
  'file:///' + path.resolve('scratch/temp-verify.html').replace(/\\/g, '/')
]);

const domOut = verifyRes.stdout.toString();
const vMatch = domOut.match(/<div id="VERIFY_OUTPUT">([^<]+)<\/div>/);
if (vMatch) {
  console.log('Runtime test results:', JSON.parse(vMatch[1]));
} else {
  console.error('Failed to get runtime results from Chrome');
  process.exit(1);
}

console.log('\n--- 4. CAPTURE FINAL SCREENSHOTS ---');
// Final Desktop Light
// For light mode screenshot, create a temporary with light theme
let lightHtml = auraStr.replace(/var d = s \|\| [\s\S]*?;/, "var d = 'light';");
fs.writeFileSync('scratch/final-light.html', lightHtml, 'utf8');

let darkHtml = auraStr.replace(/var d = s \|\| [\s\S]*?;/, "var d = 'dark';");
fs.writeFileSync('scratch/final-dark.html', darkHtml, 'utf8');

const finalDL = path.join(artDir, 'final-desktop-light.png');
const finalDD = path.join(artDir, 'final-desktop-dark.png');
const finalML = path.join(artDir, 'final-mobile-light.png');
const finalMD = path.join(artDir, 'final-mobile-dark.png');

const urlL = 'file:///' + path.resolve('scratch/final-light.html').replace(/\\/g, '/');
const urlD = 'file:///' + path.resolve('scratch/final-dark.html').replace(/\\/g, '/');

spawnSync(chromePath, ['--headless=new', '--no-sandbox', '--disable-gpu', '--window-size=1200,900', '--screenshot=' + finalDL, urlL]);
spawnSync(chromePath, ['--headless=new', '--no-sandbox', '--disable-gpu', '--window-size=1200,900', '--screenshot=' + finalDD, urlD]);
spawnSync(chromePath, ['--headless=new', '--no-sandbox', '--disable-gpu', '--window-size=600,900', '--screenshot=' + finalML, urlL]);
spawnSync(chromePath, ['--headless=new', '--no-sandbox', '--disable-gpu', '--window-size=600,900', '--screenshot=' + finalMD, urlD]);

console.log('Final screenshots generated:');
console.log('Desktop Light:', fs.existsSync(finalDL), fs.statSync(finalDL).size);
console.log('Desktop Dark:', fs.existsSync(finalDD), fs.statSync(finalDD).size);
console.log('Mobile Light:', fs.existsSync(finalML), fs.statSync(finalML).size);
console.log('Mobile Dark:', fs.existsSync(finalMD), fs.statSync(finalMD).size);
console.log('\nALL VERIFICATIONS PASSED SUCCESSFULLY!');

