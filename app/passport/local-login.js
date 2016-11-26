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
		console.log(userData);
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
					var userDatos = {
						id: user.get('id'),
						nombre: user.get('nombre'), 
						activo: user.get('activo'),
						rol_id: user.get('rol_id'),
						authenticated: user.get('authenticated'),
						active: user.get('active')
					};
					return done(null, token, userDatos);
				})
			})
			.catch(function (err){
				done(err);
			});
	});
};