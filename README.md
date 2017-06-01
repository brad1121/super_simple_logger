super simple logger

USAGE:

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