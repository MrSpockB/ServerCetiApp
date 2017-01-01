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

		
	    var code =  ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4);
	
		var userData = 
		{
			email: email.trim(),
			password: password.trim(),
			nombre: req.body.nombre.trim(),
			rol_id: req.body.rol_id
		};
		//,
		//	authentication_code: code
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