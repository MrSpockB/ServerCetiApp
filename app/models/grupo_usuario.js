var bookshelf = require('./../config/bookshelf');

require('./user');
require('./noticia');
var GrupoUsuario = bookshelf.Model.extend({
	tableName: 'grupo_usuario',
	usuarios: function()
	{
		return this.belongsToMany('Usuario', 'grupo_usuario', 'grupo_id');
	},
	noticias: function()
	{
		return this.belongsToMany('Noticia', 'grupo_noticia', 'grupo_id');
	}
});

module.exports = bookshelf.model('GrupoUsuario', GrupoUsuario);