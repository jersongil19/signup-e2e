import { test, expect } from '@playwright/test';

test('test', async ({ page, context }) => {

  context.tracing.start({ screenshots: true, snapshots: true })
  // Go to https://signup.moonable.dev/
  await page.goto('/');

  await expect(page.locator('h1')).toHaveText('Create your account');

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').type(`catixe${Math.floor(Math.random() * (1 - 100) + 100)}@eoscast.com`);

  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').type('Test@1234');

  // Click [placeholder="Retype Password"]
  await page.locator('[placeholder="Retype Password"]').click();

  // Fill [placeholder="Retype Password"]
  await page.locator('[placeholder="Retype Password"]').type('Test@1234');

  // Click [placeholder="Country of Residence"]
  await page.locator('[placeholder="Country of Residence"]').click();

  // Fill [placeholder="Country of Residence"]
  await page.locator('[placeholder="Country of Residence"]').type('spa');

  // Click [aria-label="dropdown-item-199"]
  await page.locator('[aria-label="dropdown-item-199"]').click();

  // Check [aria-label="terms-privacy-radiobutton"]
  await page.locator('[aria-label="terms-privacy-radiobutton"]').check();

  // Click text=Sign up
  await page.locator('text=Sign up').click();

  // Click text=Thanks for Registering!
  await expect(page.locator('text=Thanks for Registering!')).toHaveText('Thanks for Registering!');

  await context.tracing.stop({ path: 'signup.zip' });
})