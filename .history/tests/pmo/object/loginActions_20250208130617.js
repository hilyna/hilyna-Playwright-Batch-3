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
        this.addChartButton = page.locator(this.loginPage.addProductButton);
        this.chartButton = page.locator(this.loginPage.chartButton);
        this.
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
    }
}