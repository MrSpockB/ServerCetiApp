var bookshelf = require('./../config/bookshelf');

require('./user');
var Invitacion = bookshelf.Model.extend({
	tableName: 'invitaciones',
	hijo: function() {
		return this.belongsTo('Usuario', 'user_hijo');
	},
	padre: function() {
		return this.belongsTo('Usuario', 'user_padre');
	}
});

module.exports = bookshelf.model('invitacion', Invitacion);