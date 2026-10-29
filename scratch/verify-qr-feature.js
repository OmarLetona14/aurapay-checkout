const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const indexPath = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');
  console.log('Navigating to:', indexPath);
  await page.goto(indexPath, { waitUntil: 'networkidle0' });

  // 1. Check transactions tab & click a transaction row
  console.log('Switching to transacciones tab...');
  await page.evaluate(() => {
    const tabBtn = document.querySelector('button[onclick*="transacciones"]');
    if (tabBtn) tabBtn.click();
  });
  await new Promise(r => setTimeout(r, 600));

  // Check if rows have QR icon
  const qrIconCount = await page.evaluate(() => {
    const table = document.getElementById('transactions-report-table-body');
    if (!table) return 0;
    const qrBtns = table.querySelectorAll('button[onclick*="openLinkQrModal"]');
    return qrBtns.length;
  });
  console.log('QR buttons in Transacciones table rows:', qrIconCount);

  // Click the first row to open drawer
  console.log('Clicking first transaction row to open drawer...');
  await page.evaluate(() => {
    const firstRow = document.querySelector('#transactions-report-table-body tr');
    if (firstRow) firstRow.click();
  });
  await new Promise(r => setTimeout(r, 600));

  // Verify drawer elements
  const drawerInfo = await page.evaluate(() => {
    const drawer = document.getElementById('drawer-container');
    const qrSection = document.getElementById('drawer-qr-section');
    const qrImg = document.getElementById('drawer-qr-img');
    const qrAmount = document.getElementById('drawer-qr-amount');
    const qrId = document.getElementById('drawer-qr-id');
    const headerQrBtn = document.getElementById('drawer-header-qr-btn');

    return {
      drawerClasses: drawer ? drawer.className : '',
      qrSectionExists: !!qrSection,
      qrImgSrc: qrImg ? qrImg.src : '',
      qrAmountText: qrAmount ? qrAmount.innerText : '',
      qrIdText: qrId ? qrId.innerText : '',
      headerQrBtnVisible: headerQrBtn ? !headerQrBtn.classList.contains('hidden') : false
    };
  });

  console.log('Drawer Info:', JSON.stringify(drawerInfo, null, 2));

  // Scroll drawer to show QR section
  await page.evaluate(() => {
    const qrSec = document.getElementById('drawer-qr-section');
    if (qrSec) qrSec.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 500));

  const artifactDir = 'C:\\Users\\Omar Letona\\.gemini\\antigravity\\brain\\dd5af267-0200-4dee-964c-123a46ef81e6';
  await page.screenshot({ path: path.join(artifactDir, 'drawer-individual-qr.png'), fullPage: false });
  console.log('Saved drawer-individual-qr.png');

  // Test opening modal from header QR button
  console.log('Clicking header QR button to open modal...');
  await page.evaluate(() => {
    const btn = document.getElementById('drawer-header-qr-btn');
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 600));

  const modalInfo = await page.evaluate(() => {
    const modal = document.getElementById('modal-qr-backdrop');
    const qrModalImg = document.getElementById('qr-modal-img');
    const copyImgBtn = document.getElementById('btn-modal-copy-qr-img');
    const modalTitle = document.getElementById('qr-modal-title');
    const modalSubtitle = document.getElementById('qr-modal-subtitle');
    const modalLinkInput = document.getElementById('qr-modal-link-input');

    return {
      modalOpen: modal ? !modal.classList.contains('hidden') : false,
      modalImgSrc: qrModalImg ? qrModalImg.src : '',
      copyImgBtnExists: !!copyImgBtn,
      modalTitle: modalTitle ? modalTitle.innerText : '',
      modalSubtitle: modalSubtitle ? modalSubtitle.innerText : '',
      modalLink: modalLinkInput ? modalLinkInput.value : ''
    };
  });

  console.log('Modal Info:', JSON.stringify(modalInfo, null, 2));

  await page.screenshot({ path: path.join(artifactDir, 'modal-individual-qr.png'), fullPage: false });
  console.log('Saved modal-individual-qr.png');

  await browser.close();
  console.log('Verification finished successfully!');
})();

