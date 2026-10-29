const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');

const lines = mainJs.split('\n');
lines.forEach((l, i) => {
  if (l.includes('facturacion') || l.includes('renderFel') || l.includes('fel-table')) {
    console.log('main.js Line ' + (i+1) + ': ' + l.trim());
  }
});

