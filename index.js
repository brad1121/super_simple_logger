'use strict';
const fs = require('fs');
var os = require("os");
module.exports = (level,message,log_path = './super_simple_logger.txt')=>{
	return new Promise((resolve,reject)=>{
		console.log(typeof message);
		if(typeof message == 'array' || typeof message == 'object' ){
			message = JSON.stringify(message);
		}
	if(fs.existsSync(log_path) || log_path == './super_simple_logger.txt'){
	let log_line = new Date().toISOString().replace("T"," ")+" ["+level+"] "+message+os.EOL;
	fs.appendFile(log_path,log_line,'utf8',(err)=>{
		 if (err) reject(err);
		 resolve();
		});
	}else{
		reject('Unable to find file at '+log_path);
	}
	})
	
};