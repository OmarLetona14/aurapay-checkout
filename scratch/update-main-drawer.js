const fs = require('fs');

let mainJs = fs.readFileSync('main.js', 'utf8');

// 1. Update refreshTransactionsFromStorage to support skipRender
const oldRefresh = `    function refreshTransactionsFromStorage() {
      try {
        const stored = StorageManager.get('ethospay_transactions') || StorageManager.get('aurapay_transactions');
        if (stored && Array.isArray(stored) && stored.length > 0) {
          transactions = stored;
          transactions.forEach((tx, idx) => {
            if (tx.delivery_status !== 'Entregado' && tx.delivery_status !== 'En proceso de entrega') {
              const status = (tx.shipping && (tx.shipping.delivery_status === 'Entregado' || tx.shipping.delivery_status === 'En proceso de entrega'))
                ? tx.shipping.delivery_status
                : (tx.status === 'PAID' && (idx % 2 === 0 || tx.transaction_id === 'chk_a1b2c3') ? 'Entregado' : 'En proceso de entrega');
              tx.delivery_status = status;
            }
            if (tx.shipping) {
              tx.shipping.delivery_status = tx.delivery_status;
            }
          });
          if (typeof calculateKPIs === 'function') calculateKPIs();
          if (typeof renderTable === 'function') renderTable();
        }
      } catch(e) {
        console.error('Error refreshing transactions from storage:', e);
      }
    }`;

const newRefresh = `    function refreshTransactionsFromStorage(skipRender = false) {
      try {
        const stored = StorageManager.get('ethospay_transactions') || StorageManager.get('aurapay_transactions');
        if (stored && Array.isArray(stored) && stored.length > 0) {
          transactions = stored;
          transactions.forEach((tx, idx) => {
            if (tx.delivery_status !== 'Entregado' && tx.delivery_status !== 'En proceso de entrega') {
              const status = (tx.shipping && (tx.shipping.delivery_status === 'Entregado' || tx.shipping.delivery_status === 'En proceso de entrega'))
                ? tx.shipping.delivery_status
                : (tx.status === 'PAID' && (idx % 2 === 0 || tx.transaction_id === 'chk_a1b2c3') ? 'Entregado' : 'En proceso de entrega');
              tx.delivery_status = status;
            }
            if (tx.shipping) {
              tx.shipping.delivery_status = tx.delivery_status;
            }
          });
          if (!skipRender) {
            if (typeof calculateKPIs === 'function') calculateKPIs();
            if (typeof renderTable === 'function') renderTable();
          }
        }
      } catch(e) {
        console.error('Error refreshing transactions from storage:', e);
      }
    }`;

if (mainJs.includes(oldRefresh)) {
  mainJs = mainJs.replace(oldRefresh, newRefresh);
  console.log('1. Updated refreshTransactionsFromStorage in main.js');
} else {
  console.log('1. Could not match oldRefresh verbatim. Trying regex or already updated.');
}

// 2. Update renderTransactionsReport rows to be clickable
const oldReportRow = `      paidTxs.forEach(t => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50/70 transition-colors border-b border-gray-100';

        const auth = t.auth_number || 'N/A';
        const audit = t.audit_number || 'N/A';
        const ref = t.reference_number || 'N/A';
        const pDate = t.payment_date || t.date;

        tr.innerHTML = \`
          <td class="px-6 py-4 font-semibold font-mono text-xs text-gray-900 whitespace-nowrap">\${auth}</td>
          <td class="px-6 py-4 font-semibold font-mono text-xs text-gray-900 whitespace-nowrap">\${audit}</td>
          <td class="px-6 py-4 text-xs font-mono text-gray-500 whitespace-nowrap">\${ref}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <button onclick="openDrawerFromReport('\${t.transaction_id}')" class="text-xs text-aura-primary font-bold hover:underline font-mono focus:outline-none">\${t.transaction_id}</button>
          </td>
          <td class="px-6 py-4 font-semibold text-gray-800 text-xs whitespace-nowrap">\${t.client}</td>
          <td class="px-6 py-4 text-right font-semibold text-gray-900 text-xs whitespace-nowrap">\${formatCurrency(t.amount, t.currency)}</td>
          <td class="px-6 py-4 text-xs text-gray-400 font-medium whitespace-nowrap">\${pDate}</td>
        \`;
        tbody.appendChild(tr);
      });`;

const newReportRow = `      paidTxs.forEach(t => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50/70 transition-colors border-b border-gray-100 cursor-pointer';
        tr.onclick = () => openDrawer(t);

        const auth = t.auth_number || 'N/A';
        const audit = t.audit_number || 'N/A';
        const ref = t.reference_number || 'N/A';
        const pDate = t.payment_date || t.date;

        tr.innerHTML = \`
          <td class="px-6 py-4 font-semibold font-mono text-xs text-gray-900 whitespace-nowrap">\${auth}</td>
          <td class="px-6 py-4 font-semibold font-mono text-xs text-gray-900 whitespace-nowrap">\${audit}</td>
          <td class="px-6 py-4 text-xs font-mono text-gray-500 whitespace-nowrap">\${ref}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <button type="button" onclick="event.stopPropagation(); openDrawerFromReport('\${t.transaction_id}')" class="text-xs text-aura-primary font-bold hover:underline font-mono focus:outline-none">\${t.transaction_id}</button>
          </td>
          <td class="px-6 py-4 font-semibold text-gray-800 text-xs whitespace-nowrap">\${t.client}</td>
          <td class="px-6 py-4 text-right font-semibold text-gray-900 text-xs whitespace-nowrap">\${formatCurrency(t.amount, t.currency)}</td>
          <td class="px-6 py-4 text-xs text-gray-400 font-medium whitespace-nowrap">\${pDate}</td>
        \`;
        tbody.appendChild(tr);
      });`;

if (mainJs.includes(oldReportRow)) {
  mainJs = mainJs.replace(oldReportRow, newReportRow);
  console.log('2. Updated renderTransactionsReport rows in main.js');
} else {
  console.log('2. Could not match oldReportRow verbatim.');
}

// 3. Update openDrawer and closeDrawer
const oldDrawerStart = `    function openDrawer(transaction) {
      // Refresh latest transactions state from storage to reflect recent payments immediately
      refreshTransactionsFromStorage();
      const txnId = (typeof transaction === 'object' && transaction) ? transaction.transaction_id : transaction;
      const fresh = transactions.find(t => t.transaction_id === txnId);
      if (fresh) transaction = fresh;
      selectedTransaction = transaction;

      const isPaid = (transaction.status === 'PAID' || transaction.status === 'COMPLETED' || transaction.status === 'APROBADA');

      document.getElementById('drawer-title').innerText = transaction.transaction_id;`;

const newDrawerStart = `    let drawerCloseTimeoutId = null;

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

if (mainJs.includes(oldDrawerStart)) {
  mainJs = mainJs.replace(oldDrawerStart, newDrawerStart);
  console.log('3. Updated openDrawer head in main.js');
} else {
  console.log('3. Could not match oldDrawerStart verbatim.');
}

// 4. Safe subtitle, client, phone, desc, merchant
const oldDetails = `      document.getElementById('drawer-subtitle').innerText = \`Establecimiento: \${transaction.merchant.name}\`;
      document.getElementById('detail-client').innerText = transaction.client;
      document.getElementById('detail-phone').innerText = transaction.phone;
      document.getElementById('detail-desc').innerText = transaction.product.title;`;

const newDetails = `      const mName = (transaction.merchant && transaction.merchant.name) ? transaction.merchant.name : 'Café Don Arturo, S.A.';
      document.getElementById('drawer-subtitle').innerText = \`Establecimiento: \${mName}\`;
      document.getElementById('detail-client').innerText = transaction.client || 'Consumidor';
      document.getElementById('detail-phone').innerText = transaction.phone || 'N/A';
      document.getElementById('detail-desc').innerText = (transaction.product && transaction.product.title) ? transaction.product.title : (transaction.description || 'Cobro de Comercio');`;

if (mainJs.includes(oldDetails)) {
  mainJs = mainJs.replace(oldDetails, newDetails);
  console.log('4. Updated safe drawer details in main.js');
} else {
  console.log('4. Could not match oldDetails verbatim.');
}

// 5. Update detail-merchant
const oldMerchant = `document.getElementById('detail-merchant').innerText = transaction.merchant.name;`;
const newMerchant = `document.getElementById('detail-merchant').innerText = (transaction.merchant && transaction.merchant.name) ? transaction.merchant.name : 'Café Don Arturo, S.A.';`;
if (mainJs.includes(oldMerchant)) {
  mainJs = mainJs.replace(oldMerchant, newMerchant);
  console.log('5. Updated detail-merchant in main.js');
}

// 6. Populate bank auth section
const oldTimelineCall = `      updateTimelineUI(transaction);`;
const newAuthAndTimeline = `      // Populate Bank Authorization & Settlement Section
      const authSection = document.getElementById('detail-bank-auth-section');
      const authNumEl = document.getElementById('detail-auth-number');
      const auditNumEl = document.getElementById('detail-audit-number');
      const refNumEl = document.getElementById('detail-reference-number');
      const payDateEl = document.getElementById('detail-payment-date');
      if (authSection) {
        if (isPaid && (transaction.auth_number || transaction.reference_number || transaction.payment_date)) {
          authSection.classList.remove('hidden');
          if (authNumEl) authNumEl.innerText = transaction.auth_number || 'AUT-161344';
          if (auditNumEl) auditNumEl.innerText = transaction.audit_number || '000104';
          if (refNumEl) refNumEl.innerText = transaction.reference_number || \`REF-\${transaction.transaction_id || 'TX'}-409\`;
          if (payDateEl) payDateEl.innerText = transaction.payment_date || transaction.date || 'Reciente';
        } else {
          authSection.classList.add('hidden');
        }
      }

      updateTimelineUI(transaction);`;

if (mainJs.includes(oldTimelineCall)) {
  mainJs = mainJs.replace(oldTimelineCall, newAuthAndTimeline);
  console.log('6. Added Bank Auth population to openDrawer in main.js');
} else {
  console.log('6. Could not match oldTimelineCall verbatim.');
}

// 7. Update closeDrawer to cancel pending timeouts
const oldCloseDrawer = `    function closeDrawer() {
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

const newCloseDrawer = `    function closeDrawer() {
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

if (mainJs.includes(oldCloseDrawer)) {
  mainJs = mainJs.replace(oldCloseDrawer, newCloseDrawer);
  console.log('7. Updated closeDrawer in main.js');
} else {
  console.log('7. Could not match oldCloseDrawer verbatim.');
}

// 8. Update updateTimelineUI for timeline safety
const oldTimelineNodes = `      nodes[0].time.innerText = t.timeline[0] || t.date;`;
const newTimelineNodes = `      const tl = (t && Array.isArray(t.timeline)) ? t.timeline : [(t && t.date) || ''];
      if (nodes[0].time) nodes[0].time.innerText = tl[0] || (t && t.date) || '';`;

if (mainJs.includes(oldTimelineNodes)) {
  mainJs = mainJs.replace(oldTimelineNodes, newTimelineNodes);
  console.log('8. Updated updateTimelineUI timeline safety in main.js');
}

fs.writeFileSync('main.js', mainJs, 'utf8');
console.log('Finished updating main.js');

