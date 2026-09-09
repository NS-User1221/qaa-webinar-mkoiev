import { test, expect } from '@playwright/test';
import { PageManager } from '../page-object/page-manager';

// test.beforeEach('login', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
// });

test.describe('standard user tests', () => {
    test.use ({ storageState: 'playwright/.auth/user_standard.json' });

    test(
      'Item is visible when logged in as standard user and adding an item and navigating to the cart page', 
      async ({ page }) => {

        // Navigate to home page and add the backpack item to the cart:
        const homePage = new PageManager(page).home
        await homePage.navigate();
        await homePage.addToCartBackpackButton.click();
        
        // Navigate directly to the shopping cart page and verify page URL is correct:
        const shoppingCartPage = new PageManager(page).shoppingCart;
        await shoppingCartPage.navigate();
        await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

        // Verify the backpack item is visible:
        const cartItem = shoppingCartPage.inventoryItem;
        await expect(cartItem, 'The cart item is visible').toBeVisible();
        await expect(cartItem, 'The cart item title is correct').toContainText('Sauce Labs Backpack');        
    });
});