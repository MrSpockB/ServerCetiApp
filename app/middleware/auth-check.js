var jwt = require('jsonwebtoken'),
	User = require('./../models/user');

	module.exports = function(config)
	{
		return function(req, res, next)
		{
			if(req.method === "OPTIONS")
				next();

			if(!req.headers.authorization)
				return res.status(401).end();

			var token = req.headers.authorization.split(' ')[1];
			jwt.verify(token, config.jwtSecret, function(err, decoded)
			{
				if(err)
					return res.status(401).end();
				var userId = decoded.sub;
				User.forge({id: userId})
				.fetch()
				.then(function(user)
				{

					if (!user) {
						return res.status(401).end();
					}
					res.userID = user.id;
					return next();
				})
				.catch(function(err){
					return res.status(401).end();
				});
			});
		};
	};