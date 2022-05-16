const { chromium } = require('@playwright/test')

module.exports = async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('https://github.com/login')
  await page.fill('input[name="login"]', 'user')
  await page.fill('input[name="password"]', 'password')
  await page.click('text=Sign in')
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' })
  await browser.close()
}
