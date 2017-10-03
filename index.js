const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox']
    });
    const page = await browser.newPage();
    await page.goto('https://menigo.se');
    await page.screenshot({
        path: 'example.png'
    });

    await browser.close();
})();