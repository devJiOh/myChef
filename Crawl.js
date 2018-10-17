/*

var https = require('https');

// Checks if user has supplied a URL in cmd
if(process.argv.length <= 2){
	console.log("Usage: " + __filename + " URL");
	process.exit(-1);
}

var url = process.argv[2];

//	Once have url, call .get() providing requested url and
//	a callback, which will be executed with a response object
https.get(url, function(res){
		console.log("Response: " + res.statusCode);
}).on('error', function(e){
	console.log("Error: " + e.message);
});

*/

var Crawler = require("crawler");
const EventEmitter = require('events');
const emitter = new EventEmitter();
request = require('request').defaults({maxRedirects:20})

emitter.setMaxListeners(0);

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text());
        }
        done();
    }
});


// Queue just one URL, with default callback
c.queue('http://www.amazon.com');
 
// Queue a list of URLs
c.queue(['http://www.google.com/','http://www.yahoo.com']);

// Queue URLs with custom callbacks & parameters
c.queue([{
    uri: 'https://shop.coles.com.au/a/a-vic-metro-coburg/product/black-swan-dip-hommus-9580680p',
    jQuery: false,
 
    // The global callback won't be called
    callback: function (error, res, done) {
        if(error){
            console.log(error);
			emitter.on('warning', e => console.warn(e.stack));
        }else{
            console.log('Grabbed', res.body.length, 'bytes');
        }
        done();
    }
}]);
