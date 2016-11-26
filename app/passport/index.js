var config = require('../config/config');

module.exports = function(passport)
{
	var localLoginStrategy = require('./local-login')(config);
	var localSignupStrategy = require('./local-signup')(config);
	//var localRequestCodeStrategy = require('./local-request-code')(config);
	
	passport.use('local-signup', localSignupStrategy);
	passport.use('local-login', localLoginStrategy);
	//passport.use('local-request-code', localLoginStrategy);


};