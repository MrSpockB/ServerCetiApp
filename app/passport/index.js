var config = require('../config/config');

module.exports = function(passport)
{
	var localLoginStrategy = require('./local-login')(config);
	var localSignupStrategy = require('./local-signup')(config);
	
	passport.use('local-signup', localSignupStrategy);
	passport.use('local-login', localLoginStrategy);



};