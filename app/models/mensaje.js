var bookshelf = require('./../config/bookshelf');
require('./conversacion');

var Mensaje = bookshelf.Model.extend({
	tableName: 'mensaje',
	conversacion: function()
	{
		return this.belongsTo('Conversacion', 'conversacion_id');
	},
	remitente: function()
	{
		return this.belongsTo('Usuario', 'remitente_id');
	}
});

module.exports = bookshelf.model('Mensaje', Mensaje);