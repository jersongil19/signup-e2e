import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
})

test('test oops', async ({ page, context }) => {
  // await context.tracing.start({ screenshots: true, snapshots: true })
  await page.goto('/scrollbars');
  await page.click('#hidingButton')
  // await context.tracing.stop({ path: 'trace.zip' })
})

test.only('github auth', async ({ page}) => {
  await page.goto('https://github.com/login');
})