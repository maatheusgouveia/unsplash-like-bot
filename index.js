require('dotenv/config');
const puppeter = require('puppeteer');

(async () => {
    const browser = await puppeter.launch({
        headless: false,
    });

    const page = await browser.newPage();

    await page.goto('https://unsplash.com/');

    await page.click('[href="/login"]');

    await page.type('[name="user[email]"]', process.env.UNSPLASH_EMAIL);

    await page.type('#user_password', process.env.UNSPLASH_PASS);

    await page.click('[type="submit"]');

    await page.waitForNavigation();
})()
