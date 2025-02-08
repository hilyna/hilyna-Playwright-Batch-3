import loginPage from "../locator/loginPage";
import { expect } from "@playwright/test";

export default class loginActions{
    /**
     * 
     * @param {import('@playwright/test').page} page
     */

    constructor(page){
        this.page = page;
        this.loginPage = new loginPage();
        this.inputUsername = page.locator(this.loginPage.inputUsername);
        this.inputPassword = page.locator(this.loginPage.inputPassword);
        this.clickButtonLogin = page.locator(this.loginPage.clickButton);

        this.addProductButton = page.locator(this.loginPage.addProductButton);
        this.chartButton = page.locator(this.loginPage.chartButton);
        this.checkoutButton = page.locator(this.loginPage.checkoutButton);
        this.inputFirstName = page.locator(this.loginPage.inputFirstName);
        this.inputLastName = page.locator(this.loginPage.inputLastName);
        this.inputZipCode = page.locator(this.loginPage.inputZipCode);
        this.continueButton = page.locator(this.loginPage.continueButton);
        this.finishButton = page.locator(this.loginPage.finishButton);
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async inputLogin(){
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickButtonLogin.click();

        await this.addProductButton.click();
        await this.chartButton.click();
        await this.checkoutButton.click();
        await this.inputFirstName.fill('Hilmy');
        await expect(this.inputFirstName).toHaveValue('Hilmy');
        await this.inputLastName.fill('Azizah');
        await expect(this.inputLastName).toHaveValue('Azizah');
        await this.inputZipCode.fill('12345');
        await expect(this.inputZipCode).toHaveValue('12345');
        await this.continueButton.click();
        await this.finishButton.click();
    }
}