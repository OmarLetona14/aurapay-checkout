const fs = require('fs');

function removeTrustBadge(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove HTML
  const htmlPattern = /\s*<!-- Badge único de confianza y seguridad \(PCI-DSS, SSL, Marcas\) -->\s*<div class="checkout-trust-badge">[\s\S]*?<\/div>\s*<\/div>/;
  if (!htmlPattern.test(content)) {
    console.error('Could not find trust badge HTML in', filePath);
    process.exit(1);
  }
  content = content.replace(htmlPattern, '');

  // 2. Remove CSS
  const cssPattern = /\s*\/\* ---- Single Trust Security Badge ---- \*\/[\s\S]*?html\[data-theme="dark"\] \.trust-brand-pill \{[\s\S]*?\}\s*/;
  if (!cssPattern.test(content)) {
    console.error('Could not find trust badge CSS in', filePath);
    process.exit(1);
  }
  content = content.replace(cssPattern, '\n\n    ');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully removed trust badge from', filePath);
}

removeTrustBadge('aurapay-checkout.html');
removeTrustBadge('ethospay-checkout.html');

