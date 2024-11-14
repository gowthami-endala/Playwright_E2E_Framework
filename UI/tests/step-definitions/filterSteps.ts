import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import LoginPage from "../../tests/pages/loginPage";
import FilterPage from "../../tests/pages/filterPage";
import { page } from "../hooks";

let loginPage: LoginPage;
let filterPage: FilterPage;

Given('User Clicks on the Filter', async function () {
  loginPage = new LoginPage(page);
  await loginPage.login_standardUser();
  filterPage = new FilterPage(page);
  await filterPage.verifyFilter();
});

When('Verifying four  filter options', { timeout: 10000 }, async function () {
  await filterPage.filterOptions();
  await filterPage.clickZtoA();
  await filterPage.clickAtoZ();
  await filterPage.clicklohi();
  await filterPage.clickhilo();
});

Then('Clicking outside should close the pop up', { timeout: 10000 }, async function () {
  await filterPage.clickHeader();
  await filterPage.sort();
});
Given('User is on homePage', async function () {
  loginPage = new LoginPage(page);
  await loginPage.login_standardUser();
  filterPage = new FilterPage(page);
  await filterPage.verifyFilter();
});
When('User selects a-z on the filter', async function () {
  await filterPage.clickAtoZ();
});

Then('Filter options are sorted alphabetically A-Z on the results displayed', async function () {
  await filterPage.sortAtoZ();
});
When('User selects z-a on the filter', async function () {
  await filterPage.clickZtoA();
});
Then('Filter options are sorted alphabetically Z-A on the results displayed', async function () {
  await filterPage.sortZtoA();
});

When('User selects Price Low-High on the filter', async function () {
  await filterPage.clicklohi();
});

Then('Filter options are sorted Price Low-High on the results displayed', async function () {
  await filterPage.sortlohi();
});

When('User selects Price High-Low on the filter', async function () {
  await filterPage.clickhilo();
});

Then('Filter options are sorted Price High-Low on the results displayed', async function () {
  await filterPage.sorthilo();
});

Given('User is on the home page', async function () {
  loginPage = new LoginPage(page);
  filterPage = new FilterPage(page);
  await loginPage.login_standardUser();
});

When('User clicks on the first product', async function () {
  await filterPage.clickFirstProduct();
});

Then('User is navigated to the product details page', async function () {
  await filterPage.verifyProductspage();
});

Then('the product name is displayed', async function () {
  await filterPage.verifyProductName();
});

Then('the product description is displayed', async function () {
  await filterPage.verifyProductDescription();
});

Then('the product price is displayed', async function () {
  await filterPage.verifyProductPrice();
});


When('User clicks on Add to Cart', async function () {
  await filterPage.clickAddToCart();
});

Then('the Add to Cart button changes to Remove', async function () {
  await filterPage.verifyRemoveButton();
});

Then('the cart shows one item', async function () {
  await filterPage.verifyCartIcon();
});

When('User clicks on Back to products', async function () {
  await filterPage.clickBackToProducts();
});

Then('User is navigated back to the product page where all products are listed', async function () {
  await filterPage.productsList();
});