import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import HamburgerMenuPage from "../pages/hamBurgerMenu";
import { page } from "../hooks";


let loginPage: LoginPage;
let menuPage: HamburgerMenuPage;

Given('user clicks on the Hamburger Menu', async function () {
    loginPage = new LoginPage(page);
    menuPage= new HamburgerMenuPage(page);
    await loginPage.login_standardUser();
    await loginPage.verifyHeader();
    await menuPage.clickHamburgerMenu();
});
When('verifying the existnace of all options', async function () {

    await menuPage.verifyAllitems();
    await menuPage.verifyAbout();
    await menuPage.verifyresetAppState();
    await menuPage.verifyclickLogout();
});
Then('Click on the close button to close the menu', async function () {
    await menuPage.closeButton();
});