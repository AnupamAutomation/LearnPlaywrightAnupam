const {test, expect}=require('@playwright/test');
test  ('test login', async({browser})=>
{
   const Context= await browser.newContext();
    const page= await Context.newPage();
    const UserName= page.locator('value').fill('name');
    const Password= page.locator('value').fill('password');
    const SignIn= page.locator('value/correct path');
    
    page.goto('url');
    await page.UserName.fill("");
    await page.UserName.fill("abc");
    await page.Password;
    await page.SignIn.click();

})