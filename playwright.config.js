// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
  use: {
    baseURL: 'https://signup.moonable.dev/',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    trace: {
      mode: 'on',
      screenshots: true,
      snapshots: true
    }
  },
  reporter: [['html', { outputFolder: 'my-report' }]],
  timeout: 700000,
  testDir: './tests'
}

module.exports = config
