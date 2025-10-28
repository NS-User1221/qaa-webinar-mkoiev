import {HomePage} from "./home.po";
import {LoginPage} from "./login.po";

export class PageManager {
    constructor(private readonly page) {
    }

    get home() {
        return new HomePage(this.page);
    }

    get login() {
        return new LoginPage(this.page);
    }
}