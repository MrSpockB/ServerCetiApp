var bookshelf = require('./../config/bookshelf');

require('./user');
require('./noticia');
require('./conversacion');
var Grupo = bookshelf.Model.extend({
	tableName: 'grupos',
	usuarios: function()
	{
		return this.belongsToMany('Usuario', 'grupo_usuario', 'grupo_id');
	},
	noticias: function()
	{
		return this.belongsToMany('Noticia', 'grupo_noticia', 'grupo_id');
	},
	conversaciones: function()
	{
		return this.hasMany('Conversacion', 'grupo_id');
	}
});

module.exports = bookshelf.model('Grupo', Grupo);