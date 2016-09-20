process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./app/config/config'),
	mongoose = require('./app/config/mongoose'),
	express = require('./app/config/express');

var db = mongoose(),
	app = express();

app.listen(config.port);

console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);