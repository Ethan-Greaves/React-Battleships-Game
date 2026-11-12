/// <reference types="node" />
import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './e2e',
	use: {
		baseURL: 'http://localhost:4173',
		trace: 'on-first-retry',
	},
	webServer: {
		url: 'http://localhost:4173',
		command: 'npm run preview',
		reuseExistingServer: !process.env.CI,
	},
	retries: process.env.CI ? 2 : 0,
});
