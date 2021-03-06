var bcrypt = require('bcrypt-nodejs'),
	jwt = require('jsonwebtoken'),
	User = require('./../models/user')
	passportLocalStrategy = require('passport-local').Strategy;

module.exports = function(config)
{
	return new passportLocalStrategy(
	{
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
			password: password.trim()
		};
		User.forge({email: userData.email})
			.fetch()
			.then(function(user)
			{
				if(!user)
				{
					var error = new Error("Email o contraseña incorrecta");
					error.name = "CredencialesIncorrectasError";
					return done(error);
				}
				user.comparePassword(userData.password, function(err, isMatch) {
					if(err)
						return done(err);
					if(!isMatch)
					{
						var error = new Error("Email o contraseña incorrecta");
						error.name = "CredencialesIncorrectasError";
						return done(error);
					}
					var payload = 
					{
						sub: user.id,
					};
					var token = jwt.sign(payload, config.jwtSecret);
					var userData = {
						name: user.name
					};
					return done(null, token, userData);
				})
			})
			.catch(function (err){
				done(err);
			});
	});
};