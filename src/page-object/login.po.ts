import {Page} from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {
    }
    
    get usernameInput() {
        return this.page.locator('input[data-test="username"]');
    }
    get passwordInput() {
        return this.page.locator('input[data-test="password"]');
    }
    get loginButton() {
        return this.page.locator('#login-button');
    }
    get logo() {
        return this.page.locator(".login_logo");
    }
    navigate() {
        return this.page.goto(`/`);
    }
}