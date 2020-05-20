const cheerio = require('cheerio');
const axios = require('axios');
const rp = require('request-promise');

const url = 'https://www.aldi.com.au/en/groceries/pantry/chocolate/';

axios.get(url)
    .then(response => {
        let getData = html => {
            data = [];
            const $ = cheerio.load(html);


            $('.box--description--header').each((i, elem) => {
                data.push({
                    title : $(elem).text()
                });
            });

            console.log(data);
        }
        getData(response.data)
    })
    .catch(error => {
        console.log('error');
    })
