const cheerio = require('cheerio');
const axios = require('axios');
const rp = require('request-promise');

const url = 'https://www.aldi.com.au/en/groceries/pantry/chocolate/';

axios.get(url)
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

            console.log(data);
        }
        getData(response.data)
    })
    .catch(error => {
        console.log('error');
    })
