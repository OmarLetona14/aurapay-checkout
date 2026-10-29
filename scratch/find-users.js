const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');

const lines = mainJs.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('currentUser =') || l.includes('fillDemoCredentials')) {
    console.log('Line ' + (idx+1) + ': ' + l.trim());
  }
});

