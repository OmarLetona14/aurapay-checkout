const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const bankWords = ['banrural', 'caja rural', 'cajarural', 'rural'];
for (const word of bankWords) {
  const matches = (indexHtml.match(new RegExp(word, 'gi')) || []).length;
  console.log(`index.html count of "${word}":`, matches);
}

