import { Page } from "@playwright/test";

export class ShoppingCartPage {
    constructor(private page: Page) {
    }

    get CheckoutButton() {
        return this.page.getByRole('button', { name: 'Checkout'} );
    }
    get ContinueShoppingButton() {
        return this.page.getByRole('button', {name: 'Continue Shopping'});
    }
    get inventoryItem() {
        return this.page.locator('[data-test="inventory-item"]');
    }

    async navigate() {
        await this.page.goto(`https://www.saucedemo.com/cart.html`);
    }
}