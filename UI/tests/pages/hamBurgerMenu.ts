import { expect, Page } from "@playwright/test";
import * as menuData from '../../testData/menuData.json'

export default class HamburgerMenuPage {

    constructor(private page: Page) {
        this.page = page;
    }
    async clickHamburgerMenu() {
        expect(await this.page.locator(menuData.burgerMenu)).toBeVisible();
        await this.page.locator(menuData.burgerMenu).click();

    }
    async closeButton() {
        const close = await this.page.locator(menuData.menuClose);
        await close.click();
        expect(await this.page.locator(menuData.hiddenValue)).not.toBeVisible();
    }
    async verifyAllitems() {
        expect(await this.page.locator(menuData.sideBar)).toBeVisible();
    }
    async verifyAbout() {
        expect(await this.page.locator(menuData.about)).toBeVisible();
    }
    async verifyresetAppState() {
        expect(await this.page.locator(menuData.logout)).toBeVisible();
    }
    async verifyclickLogout() {
        expect(await this.page.locator(menuData.reset)).toBeVisible();
    }

}