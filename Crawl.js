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


