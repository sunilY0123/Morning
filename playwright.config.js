// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,

  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  // use: {
  //   // Base URL (optional)
  //   // baseURL: 'http://localhost:3000',

  //   // headless: false, // ✅ Headed mode enabled here
  //   // trace: 'on-first-retry',
  // },

  projects: [
    {
      name: 'chromium',
      use: { 
        headless: true, // ✅ Headed mode enabled for Chromium
       }, // optional
    },
    // Uncomment below to test on Firefox or WebKit
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
  ],
});
