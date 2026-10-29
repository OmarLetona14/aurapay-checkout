const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const scriptRegex = /<script(?:\s+[^>]*)?>([\s\S]*?)<\/script>/gi;
let match;
let i = 0;
while ((match = scriptRegex.exec(indexHtml)) !== null) {
  i++;
  const tag = match[0].split('>')[0] + '>';
  console.log(`Script #${i}: tag=${tag}, inlineLength=${match[1].length}`);
}

