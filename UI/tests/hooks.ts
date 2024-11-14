import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, firefox, Page } from "playwright/test";
import * as dotenv from 'dotenv';

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async function () {
    dotenv.config();
        //path:'${process.cwd()}/config/.env.${process.env.npm_config_env}'
    let browserType = process.env.browser;
    switch (browserType) {
        case 'chrome':
            browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
            break;
        case 'firefox':
        case 'ff':
            browser = await firefox.launch({ headless: false, args: ['--start-maximized'] });
            break;
        case 'edge':
        case 'msedge':
            browser = await chromium.launch({ headless: false, channel: "msedge", args: ['--start-maximized'] });
            break;

        default:
            throw new Error('Invalid browser type ${browserType} is incorrect');
    }
})
Before(async function () {
    context = await browser.newContext({ viewport: null, javaScriptEnabled: true });
    page = await context.newPage();
    await page.goto(process.env.baseurl!);
});

After(async function () {
    await page.screenshot({ path: `reports/screenshot-${Date.now()}.png` });

    fullPage: true;
    
    await page.close();
    await context.close();
});
AfterAll(async function () {
    await browser.close();
})
export { page };