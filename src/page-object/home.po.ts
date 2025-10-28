import {Page} from "@playwright/test";

export class HomePage {
    constructor(private readonly page: Page) {
    }
    get logo() {
        return this.page.locator('.app_logo');
    }
    get burgerMenu() {
        return this.page.locator('#react-burger-menu-btn');
    }
    get cartButton() {
        return this.page.locator('.shopping_cart_link');
    }
}