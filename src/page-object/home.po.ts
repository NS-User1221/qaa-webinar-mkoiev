import {Page} from "@playwright/test";

export class HomePage {
    constructor(private readonly page: Page) {
    }

    get logo() {
        return this.page.getByRole('img', {name: 'Swag Labs'});
    }
    get burgerMenu() {
        return this.page.getByRole('button', {name: 'Open Menu'})
    }
    get cartButton() {
        return this.page.locator('[data-test="shopping-cart-link"]');
    }

    get addToCartBackpackButton() {
        return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    }
    
    get firstItemFromInventoryList() {
        return this.page.locator('.inventory_item').first();
    }
    get firstItemAddToCartButton() {
        return this.page.getByRole('button', {name: 'Add to cart'}).first();
    }
    get firstItemTitleLink() {
        return this.page.getByRole('link', {name: 'Sauce Labs Backpack'});
    }
    get firstItemTitleText() {
        return this.page.getByText('Sauce Labs Backpack');
    }
    
    async navigate() {
        await this.page.goto(`https://www.saucedemo.com/inventory.html`);
    }


}