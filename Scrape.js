const puppeteer = require('puppeteer');

let scrape = async() => {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto('https://shop.coles.com.au/a/a-national/product/purina-one-tuna-salmon-cat-food');
	// await page.goto('https://www.imdb.com/title/tt2250912/');
	await page.waitFor(1000);
	
	const result = await page.evaluate(() => {
		let title = document.querySelector('span.product-name').innerText;
		
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

let getAllTitles = async() => {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto('https://shop.coles.com.au/a/a-national/everything/browse?cid=alwayson_link_Coles.com.au_homepage-meganavdropdown_shop-online');
	await page.waitFor(1000);
	
	const result = await page.evaluate(() => {
		let title = document.querySelectorAll('h3 > a > span > span.product-name').innerText;

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

getAllTitles().then((value) => {
	var i;
	for(i = 0; i < value.length; i++)
		console.log(value[i] + " asdf");
});