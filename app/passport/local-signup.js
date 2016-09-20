var User = require('mongoose').model('User'),
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
			name: req.body.name.trim(),
			semestre: req.body.semestre.trim(),
			carrera: req.body.carrera.trim(),
		};
		var newUser = new User(userData);
		newUser.save(function(err){
			if(err)
				return done(err);
			return done(null);
		})
	});
};