var bookshelf = require('./../config/bookshelf');
require('./user');
require('./grupo');

var Conversacion = bookshelf.Model.extend({
	tableName: 'conversaciones',
	usuario: function()
	{
		return this.belongsTo('Usuario', 'usuario_id');
	},
	grupo: function()
	{
		return this.belongsTo('Grupo', 'grupo_id');
	},
	mensajes: function()
	{
		return this.hasMany('Mensaje', 'conversacion_id');
	}
});

module.exports = bookshelf.model('Conversacion', Conversacion);