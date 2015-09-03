var express = require('express');
var app = express();
app.use('/content', express.static(__dirname + '/content'));
console.log('Listening on port: ' + process.env.PORT);
app.listen(process.env.PORT || 3000);
