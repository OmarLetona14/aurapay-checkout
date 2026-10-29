const fs = require('fs');
const v = fs.readFileSync('scratch/verify-all.js', 'utf8');
console.log(v.substring(1500));

