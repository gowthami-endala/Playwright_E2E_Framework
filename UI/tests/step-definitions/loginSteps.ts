import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import { page } from "../hooks";

let loginPage: LoginPage;

Given("User enters the username", async function () {
   loginPage = new LoginPage(page);
    await loginPage.enterUserName();
});

Given("User enters the password", async function () {
    await loginPage.enterPassword();
});

When("User click on the login button", async function () {
    await loginPage.clickLoginButton();
});
Then("Login should be success", async function () {
    await loginPage.verifyHeader();
});
