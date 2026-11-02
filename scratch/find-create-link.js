const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const mainJs = fs.readFileSync('main.js', 'utf8');

console.log('--- Search modal/form for creating link in index.html ---');
const regex = /id="[^"]*link[^"]*"/gi;
console.log(indexHtml.match(regex));

console.log('--- Search create link functions in main.js ---');
const lines = mainJs.split(/\r?\n/);
lines.forEach((l, i) => {
  if (l.includes('modal-create') || l.includes('openCreate') || l.includes('createLink') || l.includes('create-link') || l.includes('saveLink')) {
    console.log(`L${i+1}: ${l.trim()}`);
  }
});
