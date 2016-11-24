var config = require('./../config/config');
module.exports = function(io)
{
	io.on('connection', (socket) =>
	{
		console.log('a user connected');
		socket.on('disconnect', () =>
		{
			console.log('user disconnected');
		});
		socket.on('newMessage',function(messageData)
		{
			socket.emit('messageReceived', JSON.stringify(messageData));
			console.log(messageData);
		});
	});
}