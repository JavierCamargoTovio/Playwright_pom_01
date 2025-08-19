import { test as base, chromium, Browser, Page } from '@playwright/test';

type TestFixtures = {
  browser: Browser;
  page: Page;
};

export const test = base.extend<TestFixtures>({
  browser: async ({}, use) => {
    const browser = await chromium.launch({ headless: true });
    await use(browser);
    await browser.close(); // 👈 siempre se cierra después del test
  },

  page: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await use(page);
    await context.close(); // 👈 se limpia el contexto
  },
});
