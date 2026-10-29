const fs = require('fs');
let m = fs.readFileSync('main.js', 'utf8');
const search = 'if (title) title.textContent = `Código QR · Enlace ${txId}`;';
const replace = `const txIdStr = (tx && tx.transaction_id) ? tx.transaction_id : (typeof txId === 'string' ? txId : '');\n      if (title) title.textContent = \`Código QR · Enlace \${txIdStr}\`;`;
if (m.includes(search)) {
  m = m.replace(search, replace);
  fs.writeFileSync('main.js', m, 'utf8');
  console.log('Successfully patched QR title');
} else {
  console.log('Search string not found');
}

