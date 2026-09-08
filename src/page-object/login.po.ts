import {Page} from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {
    }
    
    get usernameInput() {
        return this.page.getByPlaceholder('Username');
    }
    get passwordInput() {
        return this.page.getByPlaceholder('Password');
    }
    get loginButton() {
        return this.page.getByRole('button', {name: 'Login'}).click();
    }
    get logo() {
        return this.page.getByRole('img', {name: 'Swag Labs'});
    }
    async navigate() {
        await this.page.goto(`https://www.saucedemo.com/`);
    }
}