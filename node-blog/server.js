var express = require('express'),
    favicon = require('serve-favicon'),
    fs = require('fs'),
    logger = require('morgan');

var accessLogStream = fs.createWriteStream(__dirname + '/access.log',{flag : 'a'});

var app = express();


app.use(logger('combined',{stream:accessLogStream}));
app.use(favicon(__dirname + '/favicon.ico'));

app.get('/',function(req,res){
	res.send('hello world');
});
app.listen(1337);
console.log('Server running at http://123.56.0.108:1337/');
