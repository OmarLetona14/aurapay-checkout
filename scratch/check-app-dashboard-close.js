const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const lines = indexHtml.split('\n');
lines.forEach((l, i) => {
  if (l.includes('app-dashboard') || (l.includes('</div>') && (i > 2550 && i < 2600))) {
    console.log('Line ' + (i+1) + ': ' + l.trim().substring(0, 80));
  }
});

