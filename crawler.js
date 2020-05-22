var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    // called for each crawled page
    callback : function(error, res, done){
        if(error){
            console.log(error);
        } else{
            var $ = res.$;
            console.log($("title").text());
        }
        done();
    }
});

var aldiShort = 'https://www.aldi.com.au/en/groceries';

// Queue one URL, with default callback
c.queue(['https://www.aldi.com.au/en/groceries/']);


// Queue list of URLs
c.queue(`${aldiShort}/supersavers/`, `${aldiShort}/fresh-produce/`,
        `${aldiShort}/baby/`, `${aldiShort}/beauty/`, `${aldiShort}/freezer/`,
        `${aldiShort}/health/`, `${aldiShort}/laundry-household/`,
        `${aldiShort}/liquor/`, `${aldiShort}/pantry/`, `${aldiShort}/recipes/`,
        `${aldiShort}/dine-in/`);
