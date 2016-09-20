var News = require('mongoose').model('News');

module.exports = {
	index: 
	{
		get: function(req, res, next)
		{
			News.find({}, function(err, News)
			{
				if(err)
					return next(err);
				else
					res.json(News);
			});
		},
		post: function(req, res, next)
		{
			var newObj = new News(req.body);
			newObj.save(function(err)
			{
				if(err)
					return next(err);
				else
					res.json(newObj);
			});
		}
	}
};