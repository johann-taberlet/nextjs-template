import { test, expect } from '@playwright/test';
test('hello world', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('text=/world/i')).toBeVisible();
});
