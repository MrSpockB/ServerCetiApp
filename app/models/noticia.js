var bookshelf = require('./../config/bookshelf');

var Noticia = bookshelf.Model.extend({
	tableName: 'noticias',
	grupos: function()
	{
		return this.belongsToMany('Grupo', 'grupo_noticia', 'noticia_id');
	},
	usuario: function()
	{
		return this.belongsTo('Usuario', 'usuario_id');
	},
	comentarios: function()
	{
		return this.hasMany('Comentario', 'noticia_id');
	}
});

module.exports = bookshelf.model('Noticia', Noticia);