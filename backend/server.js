var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Soffra server listening on ${port}`);

// require('./climbDataDBConn')(app);
require('./DBConnection')();
require('./app')(app);