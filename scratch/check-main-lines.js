const fs = require('fs');
const content = fs.readFileSync('main.js', 'utf8');
const lines = content.split(/\r?\n/);
for (let i = 1200; i < 1225; i++) {
  if (lines[i]) console.log(`${i+1}: ${lines[i]}`);
}
console.log('--- 1310-1360 ---');
for (let i = 1310; i < 1360; i++) {
  if (lines[i]) console.log(`${i+1}: ${lines[i]}`);
}

