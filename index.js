'use strict';
const fs = require('fs');
var os = require("os");
module.exports = (level,message,log_path = './simple_logger.txt')=>{
	return new Promise((resolve,reject)=>{
		if(typeof message == 'Array' || typeof message == 'Object' ){
			message = JSON.stringify(message);
		}
	if(fs.existsSync(log_path)){
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