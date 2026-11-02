const fs = require('fs');

const checkout = fs.readFileSync('aurapay-checkout.html', 'utf8');

const bankWords = ['banrural', 'caja rural', 'cajarural', 'rural'];
for (const word of bankWords) {
  const matches = (checkout.match(new RegExp(word, 'gi')) || []).length;
  console.log(`aurapay-checkout count of "${word}":`, matches);
}

