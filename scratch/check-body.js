const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
console.log('Includes </body>:', h.includes('</body>'));
console.log('Last 200 chars of index.html:', h.substring(h.length - 200));

