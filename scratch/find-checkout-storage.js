const fs = require('fs');
const auraHtml = fs.readFileSync('aurapay-checkout.html', 'utf8');

const lines = auraHtml.split('\n');
lines.forEach((l, i) => {
  if (l.includes('ethospay_transactions') || l.includes('aurapay_transactions') || l.includes('localStorage.setItem')) {
    console.log('aura Line ' + (i+1) + ': ' + l.trim());
  }
});

