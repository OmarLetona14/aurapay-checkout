const fs = require('fs');
const content = fs.readFileSync('main.js', 'utf8');
const types = content.match(/type:\s*['"][^'"]+['"]/g);
console.log('Unique types in main.js:', [...new Set(types)]);

