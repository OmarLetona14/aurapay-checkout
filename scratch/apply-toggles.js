const fs = require('fs');

function updateCheckoutFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove old util-toggles from ethospay-footer
  const oldFooterPattern = /<div class="ethospay-footer"[\s\S]*?<div style="display:flex;align-items:center;gap:6px;">[\s\S]*?<img class="ethos-logo-full"[^>]*>[\s\S]*?<\/div>\s*<span aria-hidden="true">·<\/span>\s*<div class="util-toggles"[\s\S]*?<\/div>\s*<\/div>/;
  
  if (!oldFooterPattern.test(content)) {
    console.error('Could not match old footer pattern in', filePath);
    process.exit(1);
  }

  const cleanFooterReplacement = `      <div class="ethospay-footer"
        style="display:flex;align-items:center;justify-content:center;gap:12px;padding:14px 0 4px;font-size:11px;color:var(--ink-400);">
        <div style="display:flex;align-items:center;gap:6px;">
          <span>Procesado por</span>
          <img class="ethos-logo-full" src="ethos_logo_dark_full.png" alt="EthosPay"
            style="height:15px;width:auto;vertical-align:middle;">
        </div>
      </div>`;

  content = content.replace(oldFooterPattern, cleanFooterReplacement);

  // 2. Add checkout-desktop-actions after brand-strip
  const brandStripStr = '<div class="brand-strip"><span></span><span></span><span></span><span></span><span></span></div>';
  const desktopActionsStr = `\n    <!-- Utilidades superiores Desktop: Idioma y Modo Oscuro -->
    <div class="checkout-desktop-actions">
      <div class="util-toggles">
        <button aria-label="Cambiar idioma / Switch language" class="lang-toggle" onclick="toggleLang()" type="button">EN</button>
        <button aria-label="Cambiar entre modo claro y oscuro" class="theme-toggle" onclick="toggleTheme()" type="button"></button>
      </div>
    </div>`;

  if (!content.includes(desktopActionsStr)) {
    content = content.replace(brandStripStr, brandStripStr + desktopActionsStr);
  }

  // 3. Update mobile-merchant-header: replace mob-security-pill with mob-header-actions
  const oldMobileHeaderEnd = /<div class="mob-security-pill">[\s\S]*?<\/div>\s*<\/header>/;
  const mobHeaderActionsStr = `      <div class="mob-header-actions">
        <div class="util-toggles">
          <button aria-label="Cambiar idioma / Switch language" class="lang-toggle" onclick="toggleLang()" type="button">EN</button>
          <button aria-label="Cambiar entre modo claro y oscuro" class="theme-toggle" onclick="toggleTheme()" type="button"></button>
        </div>
      </div>
    </header>`;

  if (oldMobileHeaderEnd.test(content)) {
    content = content.replace(oldMobileHeaderEnd, mobHeaderActionsStr);
  }

  // 4. Replace CSS for util-toggles
  const oldCssPattern = /    \.util-toggles \{[\s\S]*?\.lang-toggle:hover \{[\s\S]*?border-color: var\(--ink-400\);\s*\}/;
  
  if (!oldCssPattern.test(content)) {
    console.error('Could not match old CSS pattern in', filePath);
    process.exit(1);
  }

  const newCssStr = `    /* ================= Toggles de Utilidad (Idioma y Modo Oscuro) ================= */
    .checkout-desktop-actions {
      position: absolute;
      top: 14px;
      right: 20px;
      z-index: 40;
      display: flex;
      align-items: center;
    }

    @media (max-width: 900px) {
      .checkout-desktop-actions {
        display: none !important;
      }
    }

    .mob-header-actions {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-left: 10px;
    }

    .util-toggles {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: var(--card);
      border: 1px solid var(--line);
      padding: 3px 4px;
      border-radius: 9999px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    html[data-theme="dark"] .util-toggles {
      background: #1b222d;
      border-color: #2b3543;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
    }

    .lang-toggle {
      height: 28px;
      min-width: 34px;
      padding: 0 8px;
      border-radius: 9999px;
      border: 1px solid transparent;
      background: transparent;
      color: var(--ink-900);
      cursor: pointer;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .04em;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all .15s ease;
    }

    .lang-toggle:hover {
      background: var(--bg);
      border-color: var(--line);
      color: var(--navy-800);
    }

    .theme-toggle {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1px solid transparent;
      background: transparent;
      color: var(--ink-900);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      transition: all .15s ease;
    }

    .theme-toggle:hover {
      background: var(--bg);
      border-color: var(--line);
      color: var(--navy-800);
    }

    .theme-toggle svg {
      width: 15px;
      height: 15px;
    }`;

  content = content.replace(oldCssPattern, newCssStr);

  // 5. Enhance .mob-merchant-info with flex: 1 1 0% and overflow: hidden
  const oldMobInfoPattern = /    \.mob-merchant-info \{\s*display: flex;\s*align-items: center;\s*gap: 10px;\s*min-width: 0;\s*\}/;
  const newMobInfoStr = `    .mob-merchant-info {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
      flex: 1 1 0%;
      overflow: hidden;
    }`;

  if (oldMobInfoPattern.test(content)) {
    content = content.replace(oldMobInfoPattern, newMobInfoStr);
  }

  // 6. Under @media (max-width:420px), hide mob-seller-sub so small screens never overflow
  const smallMobilePattern = /    @media \(max-width:420px\) \{/;
  if (smallMobilePattern.test(content) && !content.includes('.mob-seller-sub { display: none; }')) {
    content = content.replace(smallMobilePattern, '    @media (max-width:420px) {\n      .mob-seller-sub { display: none; }');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated', filePath);
}

updateCheckoutFile('aurapay-checkout.html');
updateCheckoutFile('ethospay-checkout.html');

