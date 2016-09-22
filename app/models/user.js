var bookshelf = require('./../config/bookshelf')();
var when = require('when');
var bcrypt = require("bcrypt-nodejs");

var Usuario = bookshelf.Model.extend({
	tableName: 'usuarios',
	initialize: function()
	{
		this.on('creating', this.hashPassword, this);
	},
	comparePassword: function(pass, cb)
	{
		bcrypt.compare(pass, this.get('password'), cb);
	},
	hashPassword: function(model, attrs, options){
		return when.promise(function(resolve, reject, notify){
			bcrypt.genSalt(10, function(err, salt)
			{
				if(err)
					return reject(err);
				bcrypt.hash(model.attributes.password, salt, null, function(err,hash)
				{
					if(err)
						reject(err);
					model.set('password', hash);
					resolve(hash);
				});
			});
		});
	}
});



module.exports = Usuario;