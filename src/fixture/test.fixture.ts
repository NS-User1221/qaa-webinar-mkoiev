import {test as baseTest} from "@playwright/test";
import {PageManager} from "../page-object/page-manager";

type TFixture = {
    pages: PageManager
}

const test = baseTest.extend<TFixture>({
    pages: async ({page}, use) => {
        await use(new PageManager(page));
    }
});
export default test;