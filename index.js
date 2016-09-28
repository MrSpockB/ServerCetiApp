process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./app/config/config'),
	bookshelf = require('./app/config/bookshelf'),
	express = require('./app/config/express');

var app = express();

var http = require('http');
var server = app.listen(config.port);
var io = require('socket.io').listen(server);

//var io = require('socket.io')(http);
//console.log(io);



//io.listen(http);





io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('chat message', function(msg){
	    console.log('message: ' + msg);
	    io.emit('chat message', msg);
	  });
    socket.on('event', function(data){

    });
    socket.on('disconnect', function(){

    });
});

console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);

app.get('/', function(req, res){
  res.sendFile(__dirname +'/hello.html');
});