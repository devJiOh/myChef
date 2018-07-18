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
		
		// let in
		// #tile_colrsCatalogEntryRecommendationWidget_Data_2_-2002_3074457345618276069_6 > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > h3:nth-child(3) > a:nth-child(1) > span:nth-child(1) > span:nth-child(2)
		// #tile_colrsCatalogEntryRecommendationWidget_Data_2_-2002_3074457345618276069_5 > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > h3:nth-child(3) > a:nth-child(1) > span:nth-child(1) > span:nth-child(2)
		// #tile_colrsCatalogEntryRecommendationWidget_Data_2_-2002_3074457345618276069_4 > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > h3:nth-child(3) > a:nth-child(1) > span:nth-child(1) > span:nth-child(2)
		
		return{
			title
		}
	});
	
	browser.close();
	return result;
}

let scrape2 = async() => {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto('https://shop.coles.com.au/a/a-national/everything/browse?cid=alwayson_link_Coles.com.au_homepage-meganavdropdown_shop-online');
	await page.waitFor(1000);
	
	const result = await page.evaluate(() => {
		let title = document.querySelector('#tile_colrsCatalogEntryRecommendationWidget_Data_2_-2002_3074457345618276068_8 > div > div > header > h3 > a > span > span.product-name').innerText;
		
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

scrape2().then((value) => {
	console.log(value);
});