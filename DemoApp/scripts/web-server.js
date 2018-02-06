var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../'); //__dirname is a variable for the current directory I am in, so adding the '/../' takes me to my application's root directory.

app.use(express.static(rootPath + '/app')); //this tells express to serve all the files inside my app directory as they are, without processing them.

app.listen(7000);
console.log('Listening on port 7000....');