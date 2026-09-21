import { expect } from '@playwright/test';
import { test } from '../fixture/test.fixture';
//import { PageManager } from '../page-object/page-manager';


test.describe('standard user tests', () => {
    test.use ({ storageState: 'playwright/.auth/standard_user.json' });

    test(
      'Item is visible when logged in as standard user and adding an item and navigating to the cart page', 
      async ({ pages }) => {
        const homePage = pages.home

        await homePage.navigate();
        await homePage.addToCartBackpackButton.click();

        const shoppingCartPage = pages.shoppingCart;
        await shoppingCartPage.navigate();

        const cartItem = shoppingCartPage.inventoryItem;
        await expect(cartItem, 'The cart item is visible').toBeVisible();
        await expect(cartItem, 'The cart item title is correct').toContainText('Sauce Labs Backpack');
    });
});


test.describe('Locked out user tests', () => {
    test.use ({ storageState: 'playwright/.auth/locked_out_user.json' });

    test(
      'Locked out user is not able to login, error message is displayed', 
      async ({ pages }) => {
        // bla bla
    });
});


test.describe('Problem user tests', () => {
    test.use ({ storageState: 'playwright/.auth/problem_user.json' });

    test(
      'Problem user is not able to login, error message is displayed', 
      async ({ pages }) => {
        // bla bla 
    });
});