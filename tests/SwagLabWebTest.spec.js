import { test, expect } from '@playwright/test';

test('login page ', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await expect(page.locator("//div[@class='login_credentials']//h4[1]")).toContainText("Accepted usernames are:");
 await page.locator("//input[@data-test='username']").fill('standard_user');
 await page.locator("//input[@data-test='password']").fill("secret_sauce");
 await page.locator("//input[@class='submit-button btn_action']").click();
 await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

})