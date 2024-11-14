import { expect, Page } from "@playwright/test";
import * as filterData from '../../testData/filterData.json'

export default class Filter {

    constructor(private page: Page) {
        this.page = page;
    }
    async verifyFilter() {
        expect(await this.page.locator(filterData.verifyFilterData)).toBeVisible();
    }
    async filterOptions() {
        const value = await this.page.locator(filterData.verifyFilterData).textContent();
    }
    async clickZtoA() {
        await this.page.locator(filterData.verifyFilterData).selectOption({ value: filterData.option2 });
    }
    async clickAtoZ() {
        await this.page.locator(filterData.verifyFilterData).selectOption({ value: filterData.option1 });
    }

    async clicklohi() {
        await this.page.locator(filterData.verifyFilterData).selectOption({ value: filterData.option3 });
    }

    async clickhilo() {
        await this.page.locator(filterData.verifyFilterData).selectOption({ value: filterData.option4 });
    }
    async clickHeader() {
        await this.page.locator(filterData.header).click();
    }
    async sort() {
        const element = await this.page.locator(filterData.verifyFilterData).nth(1);
        await expect(element).not.toBeVisible();
    }
    async sortAtoZ() {
        let options: string[] = await this.page.locator(filterData.item_name).allInnerTexts();
        expect(options).toEqual(options.sort());

    }
    async sortZtoA() {
        let options: string[] = (await this.page.locator(filterData.item_name).allInnerTexts());
        expect(options).toEqual(options.sort().reverse());
    }
    async sortlohi() {
        let options: string[] = (await this.page.locator(filterData.item_price).allInnerTexts());
        let receivedPrices: number[] = [];

        for (let i = 0; i < options.length; i++) {
            receivedPrices[i] = parseFloat(options[i].replace("$", ""));
        }
        //console.log(receivedPrices);
        expect(receivedPrices).toEqual(receivedPrices.sort((a, b) => a - b));
        //console.log(receivedPrices.sort((a, b) => a - b));
    }
    async sorthilo() {
        let options: string[] = (await this.page.locator(filterData.item_price).allInnerTexts());
        let receivedPrices: number[] = [];

        for (let i = 0; i < options.length; i++) {
            receivedPrices[i] = parseFloat(options[i].replace("$", ""));
        }
        // console.log(receivedPrices);
        expect(receivedPrices).toEqual(receivedPrices.sort((a, b) => b - a));
        //console.log(receivedPrices.sort((a, b) => b - a));
    }
    async clickFirstProduct() {
        const element = await this.page.locator(filterData.productname).first();
        await expect(element).toBeVisible();
        await element.click();
    }
    async verifyRemoveButton() {
        const remove = await this.page.locator(filterData.remove);
        await expect(remove).toBeVisible();
    }
   async verifyProductName(){
    const name = await this.page.locator(filterData.productname).textContent();
    await expect(name).toBe(filterData.backpack); 
   }
  async verifyProductspage(){
    const back = await this.page.locator(filterData.BacktoProducts);
        await expect(back).toBeVisible();
  }
  async clickBackToProducts(){
    const back = await this.page.locator(filterData.BacktoProducts);
    await back.click();
  }
  async verifyProductDescription(){
    const description = await this.page.locator(filterData.productDesc).textContent();
    await expect(description).toBe(filterData.productDescriptionData);

  }
  async verifyProductPrice(){
    const price = await this.page.locator(filterData.productPrice);
    await expect(price).toHaveText(filterData.productPriceData);
  }
  async clickAddToCart(){
    const add = await this.page.locator(filterData.addtoCart);
    await add.click();
  }
  async verifyCartIcon(){
    const cartBadge = await this.page.locator(filterData.addtoCartUpdate);
    await expect(cartBadge).toHaveText(filterData.cartData);
  }
  async productsList(){
    const products = await this.page.locator(filterData.productList);
    await expect(products).toBeVisible();
  }
}