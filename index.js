process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./app/config/config'),
	bookshelf = require('./app/config/bookshelf'),
	express = require('./app/config/express');

var app = express();

app.listen(config.port);

console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);