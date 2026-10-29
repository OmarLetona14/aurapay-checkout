const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');

const lines = mainJs.split('\n');
lines.forEach((l, i) => {
  if (l.includes('auth_number') || l.includes('audit_number') || l.includes('reference_number')) {
    console.log('main.js Line ' + (i+1) + ': ' + l.trim());
  }
});

const indexHtml = fs.readFileSync('index.html', 'utf8');
const idxLines = indexHtml.split('\n');
idxLines.forEach((l, i) => {
  if (l.includes('auth-number') || l.includes('audit-number') || l.includes('reference-number') || l.includes('detail-auth') || l.includes('detail-audit')) {
    console.log('index.html Line ' + (i+1) + ': ' + l.trim());
  }
});

