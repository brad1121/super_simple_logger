super simple logger


Install: 

npm install super_simple_logger --save


USAGE:

super_simple_logger('log level','message','path to log file (./super_simple_logger.txt default)')

EXAMPLE

```
var simple_looger = require('super_simple_logger');

simple_looger('foxtrot','unicorn charlie kilo')
	.then(()=>{
		console.log('done')
	})
	.catch((err)=>{
		console.log(err);
	});

```