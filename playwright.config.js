// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
  use: {
    baseURL: 'https://signup.moonable.dev/',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    trace: 'on-first-retry'
  },
  timeout: 600000
};

module.exports = config;