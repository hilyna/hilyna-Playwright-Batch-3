// @ts-check
import { test, expect } from '@playwright/test';

test('TestCase Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  const inputUsername = page.locator('#user-name');
  await inputUsername.fill('standard_user');
  await expect(inputUsername).toHaveValue('standard_user');

  const inputPassword = page.locator('#password');
  await inputPassword.fill('secret_sauce'); 
  await expect(inputPassword).toHaveValue('secret_sauce');

  const buttonLogin = page.locator('#login-button');
  await buttonLogin.click();

  const buttonAdd = page.locator('#add-to-cart-sauce-labs-backpack');
  await buttonAdd.click();
  
  const buttonCart = page.locator('#shopping_cart_container > a');
  await buttonCart.click();
  
  const buttonCO = page.locator('#checkout');
  await buttonCO.click();

    const nameCO = page.locator('#first-name');
    await nameCO.fill('Hilmy');
    await expect(nameCO).toHaveValue('Hilmy');

    const LastnameCO = page.locator('#first-name');
    await LastnameCO.fill('Azizah');
    await expect(LastnameCO).toHaveValue('Azizah');

    const zipcode = page.locator('#postal-code');
    await zipcode.fill('12345')
    await expect(zipcode).toHaveValue('12345');

    const buttonCOpage2 = page.locator('#continue');
    await buttonCOpage2.click();

    const buttonFinish = page.locator('#finish');
    await buttonFinish.click();


});


    
  



