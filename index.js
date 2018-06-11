var cs = require('./console-stamp.js');
var express = require('express');
//var log = console.log;
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
//var $ = require('jQuery);
const rp = require('request-promise');
const options = {
	uri : 'https://www.imdb.com/title/tt5463162/',
	transform: function (body){
		return cheerio.load(body);
	}
};

// boilerplayer of alternate way to scrape
rp(options)
	.then(($) => {
		console.log($);
	})
	.catch((err) => {
		console.log(err);
	});
	
/*
*	Use selectors in a htmlDoc to traverse and select elements in the doc.
*	Get the data using a selector. eg. <ul id="ingredient">tomato</li>
* 	Select id's with '#', classes with '.'
*/


app.get('/scrape', function(req, res){
    // The URL we will scrape from - in our example Anchorman 2.

    url = 'https://www.imdb.com/title/tt5463162/';

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request

        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html);

            // Finally, we'll define the variables we're going to capture

            var title, release, rating;
            var json = { title : "", release : "", rating : ""};
        }
    })
})

app.listen('8081')
console.log('Finished Scrape');

// log.call(console, Date.now());
// log.apply(console, arguments);

exports = module.exports = app;