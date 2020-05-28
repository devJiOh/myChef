const cheerio = require('cheerio');
const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;

const crawl = async(crawlUrls) => {
    await axios.get(crawlUrls)
        .then(response => {
            let getData = html => {
                data = [];
                const $ = cheerio.load(html);

                $('.ratio-container.m-ratio-57x25.box--description.m-no-ratio-on-phone').each((i, elem) => {
                    data.push({
                        title : $(elem).find('div.box--description--header').text().trim(),
                        price : $(elem).find('div.box--price > .box--value, .box--decimal').text().trim(),
                        ratio : $(elem).find('div.box--price > .box--baseprice').text().trim()
                    });
                });

                // Return data to add in MongoDB collection 'groceries'
                // TODO:
                console.log(data);
            }

            getData(response.data)
        })
        .catch(error => {
            console.log('error');
        })
};

const aldiUrl = 'https://www.aldi.com.au/en/groceries';
const urls = [`${aldiUrl}/super-savers/`,
    `${aldiUrl}/fresh-produce/dairy-eggs/`,
    `${aldiUrl}/baby/nappies-and-wipes/`, `${aldiUrl}/baby/baby-food/`,
    `${aldiUrl}/beauty/`, `${aldiUrl}/freezer/`,
    `${aldiUrl}/health/`, `${aldiUrl}/laundry-household/laundry/`,
    `${aldiUrl}/laundry-household/household/`, `${aldiUrl}/liquor/wine/`,
    `${aldiUrl}/liquor/beer-cider/`, `${aldiUrl}/liquor/champagne-sparkling/`,
    `${aldiUrl}/liquor/spirits/`, `${aldiUrl}/pantry/gluten-free/`,
    `${aldiUrl}/pantry/chocolate/`, `${aldiUrl}/pantry/olive-oil/`,
    `${aldiUrl}/pantry/just-organic/`, `${aldiUrl}/pantry/coffee/`
    ];

// not listed: fruit-veg, aus grown, meat
urls.forEach(function(value){
    crawl(value);
})
