const rp = require('request-promise');
const cheerio = require('cheerio');
const request = require('request');

var url = 'https://www.imdb.com/title/tt1825683/';

request(url, function(error, response, html){
	
	if(!error && response.statusCode == 200){
		var $ = cheerio.load(html);
		
		$('ul[data-role="listview"] > li > a[href]').each(function(i,e){
			console.log("cartoon " + $(this).text());
		});
		
		console.log($('#ratingWidget p').text());
		//console.log(html);
		console.log("printed");
	}
});


/*
const options = {
	uri: 'https://www.eatwell101.com/almond-butter-fat-bombs-recipe',
	transform: function(body){
		return cheerio.load(body);
	}
};

rp(options)
	.then(($) => {
		console.log($);
	})
	.catch((err) => {
		console.log(err);
	})
	
$('.ingredient').text();
*/