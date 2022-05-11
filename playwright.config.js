// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
  use: {
    baseURL: 'http://www.uitestingplayground.com',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    storageState: 'storageState.json'
  },
  globalSetup: require.resolve('./global-setup')
};

module.exports = config;