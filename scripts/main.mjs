import puppeteer from 'puppeteer';
import fs from 'fs';
import lighthouse from 'lighthouse';
// Or import puppeteer from 'puppeteer-core';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

const page_url = 'https://wesjrose-gbc.github.io/desn-e5-live/' 

// Navigate the page to a URL.
await page.goto(page_url);

// Set screen size.
await page.setViewport({width: 1080, height: 1024});
await page.waitForNetworkIdle();

await page.screenshot({
    path: 'auto_screenshot.png'
});

const options = {output: 'html'};
const runnerResult = await lighthouse(page_url, options, undefined, page);

// `.report` is the HTML report as a string
const reportHtml = runnerResult.report;
fs.writeFileSync('auto_report.html', reportHtml);

await browser.close();