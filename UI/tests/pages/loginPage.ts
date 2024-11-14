import { expect, Page } from "@playwright/test";
import { page } from "../hooks";
import * as loginData from '../../testData/login.json'


export default class LoginPage {
  constructor(private page: Page) {
    this.page = page;
  }

  async enterUserName() {
    await this.page.locator(loginData.username).fill(loginData.usernameData);
  }
  async enterPassword() {
    await this.page.locator(loginData.pwd).fill(loginData.pwdData);
  }

  async clickLoginButton() {
    await this.page.locator(loginData.loginBtn).click();
  }

  async login_standardUser() {
    await this.enterUserName();
    await this.enterPassword();
    await this.clickLoginButton();
  }

  async verifyHeader() {
    expect(await this.page.locator(loginData.header)).toBeVisible;
  }
}
