import { chromium } from '/home/prateek/.npm/_npx/48b1ca104c3549f4/node_modules/playwright/index.mjs';

const browser = await chromium.launch({
  headless: true,
  executablePath: '/etc/profiles/per-user/prateek/bin/chromium',
  args: ['--no-sandbox']
});

const results = { sh1: {}, sh2: {} };

// ---- SH-1: 't' key pollution check --------------------------------------
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto('http://localhost:8000/books/atlas-shrugged/index.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  // enter reader
  const begin = page.locator('text=Begin').first();
  if (await begin.count()) { await begin.click(); await page.waitForTimeout(600); }
  // open TOC
  await page.click('#btn-toc');
  await page.waitForTimeout(400);
  // focus search field explicitly and type 't' there
  const search = page.locator('#toc-search');
  if (await search.count()) {
    await search.fill('');
    await search.click();
    await search.type('t', { delay: 100 });
    await page.waitForTimeout(300);
    results.sh1.tocOpenAfterTypeInField = await page.evaluate(() => document.querySelector('#toc-drawer').classList.contains('open'));
    results.sh1.searchValue = await search.inputValue();
    // blur field, press t outside -> drawer should close
    await page.keyboard.press('Escape'); // clears/focus
    await page.waitForTimeout(300);
    // focus body and hit 't'
    await page.evaluate(() => { (document.querySelector('#reader-main') || document.body).focus(); document.activeElement.blur(); });
    await page.keyboard.press('t');
    await page.waitForTimeout(400);
    results.sh1.tocOpenAfterOutlineT = await page.evaluate(() => document.querySelector('#toc-drawer').classList.contains('open'));
  } else {
    results.sh1.search = 'no #toc-search field found (collect ids)';
    results.sh1.searchIds = await page.evaluate(() => [...document.querySelectorAll('input')].map(i => i.id || i.name || 'anon'));
  }
  results.sh1.consoleErrors = [];
  page.on('pageerror', e => results.sh1.consoleErrors.push(String(e)));
  await page.close();
}

// ---- SH-2: 390 header tap targets --------------------------------------
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto('http://localhost:8000/books/atlas-shrugged/index.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const begin = page.locator('text=Begin').first();
  if (await begin.count()) { await begin.click(); await page.waitForTimeout(600); }
  results.sh2.targets = await page.evaluate(() => {
    const sels = ['#btn-toc', '#btn-settings', '#btn-prev', '#btn-next'];
    return sels.map(sel => {
      const el = document.querySelector(sel);
      if (!el) return { sel, missing: true };
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return { sel, w: Math.round(r.width * 10) / 10, h: Math.round(r.height * 10) / 10, padding: cs.padding, visible: r.width > 0 && r.height > 0 };
    });
  });
  await page.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
