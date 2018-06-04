var log = console.log;

console.log = function(){
	log.apply(console, [Date.now()].concat(arguments));
};
console.log('file inc');
/* 

call by using:
log.call(console. Date.now());
log.apply(console.arguments);

*/