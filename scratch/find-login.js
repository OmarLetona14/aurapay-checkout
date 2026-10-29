const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');

const lines = mainJs.split('\n');
lines.forEach((l, i) => {
  if (l.includes('app-login')) {
    console.log('Line ' + (i+1) + ': ' + l.trim());
  }
});

