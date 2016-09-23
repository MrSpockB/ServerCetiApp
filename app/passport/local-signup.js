var User = require('./../models/user'),
	passportLocalStrategy = require('passport-local').Strategy;


module.exports = function(config)
{
	return new passportLocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		session: false,
		passReqToCallback: true
	}, 
	function(req, email, password, done)
	{
		var userData = 
		{
			email: email.trim(),
			password: password.trim(),
			nombre: req.body.nombre.trim(),
			rol_id: req.body.rol_id
		};
		new User(userData)
			.save()
			.then(function(user)
			{
				done(null);
			})
			.catch(function(err)
			{
				console.log(err);
				done(err);
			});
		
	});
};