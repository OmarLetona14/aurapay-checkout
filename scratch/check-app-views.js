const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const lines = indexHtml.split('\n');
lines.forEach((l, i) => {
  if (l.includes('app-login') || l.includes('app-dashboard')) {
    console.log('Line ' + (i+1) + ': ' + l.trim());
  }
});

