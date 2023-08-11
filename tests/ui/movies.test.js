const { test, expect } = require('@playwright/test');

test('Check movies page', async ({ page }) => {
    await page.goto('http://softuni-stoychev13.onrender.com/collection');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  