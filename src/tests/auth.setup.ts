import { test as setup, expect } from '@playwright/test';
import { PageManager } from '../page-object/page-manager';

// Causes a problem - places .json files in the 'tests/playwright/.auth folder':
// const userStandardFileOld = path.join(__dirname, 'playwright/.auth/user_standard.json');



const roles = [
    { name: 'standard_user', path: 'playwright/.auth/user_standard.json' },
    { name: 'locked_out_user', path: 'playwright/.auth/user_locked.json' },
    { name: 'problem_user', path: 'playwright/.auth/user_problem.json' }
];

const pass = 'secret_sauce';

for (const role of roles) {
    setup('authenticate as ' + role.name, async ({ page }) => {
        // New LoginPage class + Navigation step:
        const loginPage = new PageManager(page).login;
        await loginPage.navigate();

        // Authentication Steps:
        await loginPage.usernameInput.fill(role.name);
        await loginPage.passwordInput.fill(pass);

        // Click the login button:
        await loginPage.loginButton;

        if (role.name === 'standard User') {
            // Wait for URL first, ensuring user is logged in successfully:
            await page.waitForURL('https://www.saucedemo.com/inventory.html');
            
            // Save the storage state into the file path. This will be used in the tests to authenticate the user:
            await page.context().storageState({ path: role.path });
            console.log(`Storage state successfuly saved to ${role.path}`);
        }
        
        await page.context().storageState({ path: role.path });
    });
}