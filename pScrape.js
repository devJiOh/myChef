const puppeteer = require('puppeteer');

let scrape = async() => {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto('https://shop.coles.com.au/a/a-national/product/purina-one-tuna-salmon-cat-food');
	// await page.goto('https://www.imdb.com/title/tt2250912/');
	await page.waitFor(1000);
	
	const result = await page.evaluate(() => {
		let title = document.querySelector('#pdp-product-title > span > span.product-name').innerText;
		// let title = document.querySelector('#title-overview-widget > div.vital > div.title_block > div > div.titleBar > div.title_wrapper > h1').innerText;
		
		return{
			title
		}
	});
	
	
	
	
	browser.close();
	return result;
}

scrape().then((value) => {
	console.log(value);
});