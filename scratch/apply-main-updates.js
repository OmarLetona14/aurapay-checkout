const fs = require('fs');

let mainJs = fs.readFileSync('main.js', 'utf8');
const isCRLF = mainJs.includes('\r\n');
const eol = isCRLF ? '\r\n' : '\n';

// 1. refreshTransactionsFromStorage
const search1 = 'function refreshTransactionsFromStorage() {';
const replace1 = `function refreshTransactionsFromStorage(skipRender = false) {`;
const search1_render = 'if (typeof renderTable === \'function\') renderTable();';
const replace1_render = `if (!skipRender) {
            if (typeof calculateKPIs === 'function') calculateKPIs();
            if (typeof renderTable === 'function') renderTable();
          }`;

mainJs = mainJs.replace(search1, replace1);
mainJs = mainJs.replace(search1_render, replace1_render);

// 2. paidTxs in renderTransactionsReport
const search2 = `paidTxs.forEach(t => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50/70 transition-colors border-b border-gray-100';`;

const replace2 = `paidTxs.forEach(t => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50/70 transition-colors border-b border-gray-100 cursor-pointer';
        tr.onclick = () => openDrawer(t);`;

mainJs = mainJs.replace(search2.replace(/\n/g, eol), replace2.replace(/\n/g, eol));

// Also button inside report
const search2_btn = `<button onclick="openDrawerFromReport('\${t.transaction_id}')" class="text-xs text-aura-primary font-bold hover:underline font-mono focus:outline-none">\${t.transaction_id}</button>`;
const replace2_btn = `<button type="button" onclick="event.stopPropagation(); openDrawerFromReport('\${t.transaction_id}')" class="text-xs text-aura-primary font-bold hover:underline font-mono focus:outline-none">\${t.transaction_id}</button>`;
mainJs = mainJs.replace(search2_btn, replace2_btn);

// 3. openDrawer
const search3 = `function openDrawer(transaction) {
      // Refresh latest transactions state from storage to reflect recent payments immediately
      refreshTransactionsFromStorage();
      const txnId = (typeof transaction === 'object' && transaction) ? transaction.transaction_id : transaction;
      const fresh = transactions.find(t => t.transaction_id === txnId);
      if (fresh) transaction = fresh;
      selectedTransaction = transaction;

      const isPaid = (transaction.status === 'PAID' || transaction.status === 'COMPLETED' || transaction.status === 'APROBADA');

      document.getElementById('drawer-title').innerText = transaction.transaction_id;`;

const replace3 = `let drawerCloseTimeoutId = null;

    function openDrawer(transaction) {
      if (drawerCloseTimeoutId) {
        clearTimeout(drawerCloseTimeoutId);
        drawerCloseTimeoutId = null;
      }
      if (!transaction) return;

      // Refresh latest transactions state from storage without re-rendering table DOM
      refreshTransactionsFromStorage(true);
      const txnId = (typeof transaction === 'object' && transaction) ? transaction.transaction_id : transaction;
      const fresh = transactions.find(t => t.transaction_id === txnId);
      if (fresh) transaction = fresh;
      selectedTransaction = transaction;

      const isPaid = (transaction.status === 'PAID' || transaction.status === 'COMPLETED' || transaction.status === 'APROBADA');

      const titleEl = document.getElementById('drawer-title');
      if (titleEl) titleEl.innerText = transaction.transaction_id || '-';`;

mainJs = mainJs.replace(search3.replace(/\n/g, eol), replace3.replace(/\n/g, eol));

// 4. Safe subtitle, client, phone, desc
const search4 = `document.getElementById('drawer-subtitle').innerText = \`Establecimiento: \${transaction.merchant.name}\`;
      document.getElementById('detail-client').innerText = transaction.client;
      document.getElementById('detail-phone').innerText = transaction.phone;
      document.getElementById('detail-desc').innerText = transaction.product.title;`;

const replace4 = `const mName = (transaction.merchant && transaction.merchant.name) ? transaction.merchant.name : 'Café Don Arturo, S.A.';
      document.getElementById('drawer-subtitle').innerText = \`Establecimiento: \${mName}\`;
      document.getElementById('detail-client').innerText = transaction.client || 'Consumidor';
      document.getElementById('detail-phone').innerText = transaction.phone || 'N/A';
      document.getElementById('detail-desc').innerText = (transaction.product && transaction.product.title) ? transaction.product.title : (transaction.description || 'Cobro de Comercio');`;

mainJs = mainJs.replace(search4.replace(/\n/g, eol), replace4.replace(/\n/g, eol));

// 5. closeDrawer
const search5 = `function closeDrawer() {
      const backdrop = document.getElementById('drawer-backdrop');
      const container = document.getElementById('drawer-container');
      
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0');
      container.classList.remove('translate-x-0');
      container.classList.add('translate-x-full');
      setTimeout(() => {
        backdrop.classList.add('hidden');
        selectedTransaction = null;
      }, 300);
    }`;

const replace5 = `function closeDrawer() {
      const backdrop = document.getElementById('drawer-backdrop');
      const container = document.getElementById('drawer-container');
      if (!backdrop || !container) return;
      
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0');
      container.classList.remove('translate-x-0');
      container.classList.add('translate-x-full');
      
      if (drawerCloseTimeoutId) clearTimeout(drawerCloseTimeoutId);
      drawerCloseTimeoutId = setTimeout(() => {
        backdrop.classList.add('hidden');
        selectedTransaction = null;
        drawerCloseTimeoutId = null;
      }, 300);
    }`;

mainJs = mainJs.replace(search5.replace(/\n/g, eol), replace5.replace(/\n/g, eol));

fs.writeFileSync('main.js', mainJs, 'utf8');
console.log('Successfully applied all replacements to main.js');

