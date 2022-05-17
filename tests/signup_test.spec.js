const { test, expect } = require('@playwright/test')
const Mailosaur = require('mailosaur')

const serverId = ''
const apiKey = ''
const serverDomain = '@wgjndltd.mailosaur.net'
const mailosaur = new Mailosaur(apiKey)
const testEmail = `catixe${Math.floor(Math.random() * (1 - 100) + 100)}${serverDomain}`

test.describe('Signup', () => {
  test('error in validations', async ({ page }) => {
    // Go to https://signup.moonable.dev/
    await page.goto('/')

    await page.locator('[placeholder="Email"]').click()

    await page.locator('[placeholder="Email"]').type('catixe')

    await expect(page.locator('text=Enter valid email')).toBeTruthy()

    await page.locator('[placeholder="Password"]').click()

    await page.locator('[placeholder="Password"]').type('1234')

    await expect(page.locator('text=Enter at least 8 characters')).toBeTruthy()

    await page.locator('[placeholder="Password"]').type('12345678')

    await expect(page.locator('text=Enter at least 1 lower case')).toBeTruthy()

    await page.locator('[placeholder="Password"]').type('12345678q')

    await expect(page.locator('text=Enter at least 1 lower case')).toBeTruthy()

    await page.locator('[placeholder="Password"]').type('12345678qS')

    await expect(page.locator('text=Enter at least 1 symbol')).toBeTruthy()

    await page.locator('[placeholder="Password"]').type('12345678qS.')

    await expect(page.locator('text=Password is required')).toBeTruthy()

    await expect(page.locator('text=Sign up')).toBeDisabled()
  })

  test('signup ok', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('h1')).toHaveText('Create your account')

    await page.locator('[placeholder="Email"]').click()

    await page.locator('[placeholder="Email"]').fill(testEmail)

    await page.locator('[placeholder="Password"]').click()

    await page.locator('[placeholder="Password"]').type('Test@1234')

    await page.locator('[placeholder="Retype Password"]').click()

    await page.locator('[placeholder="Retype Password"]').type('Test@1234')

    await page.locator('[placeholder="Country of Residence"]').click()

    await page.locator('[placeholder="Country of Residence"]').type('spa')

    await page.locator('[aria-label="dropdown-item-199"]').click()

    await page.locator('[aria-label="terms-privacy-radiobutton"]').check()

    await page.locator('text=Sign up').click()

    await expect(page.locator('text=Thanks for Registering!')).toHaveText('Thanks for Registering!')
  })

  test('email confirmation', async ({ page }) => {
    // Search for the email
    const emailObj = await mailosaur.messages.get(serverId, {
      sentTo: testEmail
    })

    await page.goto(emailObj.text.links[1].href)

    await expect(page.locator('h4')).toHaveText('Your Email has been  verified successfully')

    await page.goto('https://login.moonable.dev/')

    // Click [placeholder="Email"]
    await page.locator('[placeholder="Email"]').click()
    // Fill [placeholder="Email"]
    await page.locator('[placeholder="Email"]').fill(testEmail)
    // Click [placeholder="Password"]
    await page.locator('[placeholder="Password"]').click()
    // Fill [placeholder="Password"]
    await page.locator('[placeholder="Password"]').fill('Test@1234')
    // Click [aria-label="checkbox"]
    await page.locator('[aria-label="checkbox"]').click()
    // Click text=Log In
    await page.locator('text=Log In').click()

    await expect(page.locator('h1')).toHaveText('Select The Type Of Account You Want To Have')
  })
})
