const fs = require('fs');
const aura = fs.readFileSync('aurapay-checkout.html', 'utf8');
const lines = aura.split('\n');
lines.forEach((l, i) => {
  if (l.toLowerCase().includes('transacci')) {
    console.log('aura Line ' + (i+1) + ': ' + l.trim());
  }
});

