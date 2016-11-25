var bookshelf = require('./../config/bookshelf');

var Comentario = bookshelf.Model.extend({
	tableName: 'comentarios',
	usuario: function()
	{
		return this.belongsTo('Usuario', 'remitente_id');
	},
});

module.exports = bookshelf.model('Comentario', Comentario);