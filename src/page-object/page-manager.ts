import { HomePage } from "./home.po";
import { LoginPage } from "./login.po";
import { ShoppingCartPage } from "./shoppingCart.po";
import { Page } from '@playwright/test'

export class PageManager {
    constructor(private readonly page: Page) {
    }

    get home() {
        return new HomePage(this.page);
    }

    get login() {
        return new LoginPage(this.page);
    }

    get shoppingCart() {
        return new ShoppingCartPage(this.page);
    }
}