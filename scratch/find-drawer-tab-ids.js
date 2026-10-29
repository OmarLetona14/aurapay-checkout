const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const lines = indexHtml.split('\n');
lines.forEach((l, i) => {
  if (l.includes('drawer-tab')) {
    console.log('index.html Line ' + (i+1) + ': ' + l.trim());
  }
});

