const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

function findView(viewId) {
  const start = indexHtml.indexOf('id=\"' + viewId + '\"');
  if (start === -1) {
    console.log(viewId + ' not found');
    return;
  }
  console.log('--- ' + viewId + ' ---');
  console.log(indexHtml.substring(start, start + 1200));
}

findView('transacciones-view');
findView('liquidaciones-view');
findView('facturacion-view');

