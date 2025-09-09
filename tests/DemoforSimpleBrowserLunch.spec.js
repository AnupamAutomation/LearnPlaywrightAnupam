const {test, expect} = require('@playwright/test');
test ('to launch normal browser', async({browser})=>
{
const Context = await browser.newContext();
const page= await Context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

//page fixture:

test ('page automation', async ({page})=>
    {
 await page.goto ("https://www.google.com/")
 
 // to print the title:
 console.log (await page.title());

 // to match the exact title:
await expect (page).toHaveTitle("Google");
});