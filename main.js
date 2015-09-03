var express = require('express');
var app = express();
app.use('/templates', express.static(__dirname + '/templates'));
app.use('/preview', express.static(__dirname + '/preview'));
console.log('Listening on port: ' + process.env.PORT);
app.listen(process.env.PORT || 3000);
