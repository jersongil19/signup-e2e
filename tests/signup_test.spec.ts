import { test, expect } from '@playwright/test';

test.describe('Signup', () => {
  test('error in validations', async ({ page, context }) => {
    // Go to https://signup.moonable.dev/
    await page.goto('/');
  
    await page.locator('[placeholder="Email"]').click();

    await page.locator('[placeholder="Email"]').type(`catixe`);

    await expect(page.locator('text=Enter valid email')).toBeTruthy();

    await page.locator('[placeholder="Password"]').click();

    await page.locator('[placeholder="Password"]').type('1234');

    await expect(page.locator('text=Enter at least 8 characters')).toBeTruthy();

    await page.locator('[placeholder="Password"]').type('12345678');

    await expect(page.locator('text=Enter at least 1 lower case')).toBeTruthy();

    await page.locator('[placeholder="Password"]').type('12345678q');

    await expect(page.locator('text=Enter at least 1 lower case')).toBeTruthy();

    await page.locator('[placeholder="Password"]').type('12345678qS');

    await expect(page.locator('text=Enter at least 1 symbol')).toBeTruthy();

    await page.locator('[placeholder="Password"]').type('12345678qS.');

    await expect(page.locator('text=Password is required')).toBeTruthy();

    await expect(page.locator('text=Sign up')).toBeDisabled();
  })

  test('signup ok', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('h1')).toHaveText('Create your account');
  
    await page.locator('[placeholder="Email"]').click();
  
    await page.locator('[placeholder="Email"]').type(`catixe${Math.floor(Math.random() * (1 - 100) + 100)}@moonable.eu`);

    await page.locator('[placeholder="Password"]').click();
  
    await page.locator('[placeholder="Password"]').type('Test@1234');
  
    await page.locator('[placeholder="Retype Password"]').click();
  
    await page.locator('[placeholder="Retype Password"]').type('Test@1234');
  
    await page.locator('[placeholder="Country of Residence"]').click();
  
    await page.locator('[placeholder="Country of Residence"]').type('spa');
  
    await page.locator('[aria-label="dropdown-item-199"]').click();
  
    await page.locator('[aria-label="terms-privacy-radiobutton"]').check();
  
    await page.locator('text=Sign up').click();
  
    await expect(page.locator('text=Thanks for Registering!')).toHaveText('Thanks for Registering!');
  })
})


