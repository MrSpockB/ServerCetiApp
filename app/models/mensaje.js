var bookshelf = require('./../config/bookshelf');
require('./conversacion');

var Mensaje = bookshelf.Model.extend({
	tableName: 'mensaje',
	conversacion: function()
	{
		return this.belongsTo('Conversacion', 'conversacion_id');
	}
});

module.exports = bookshelf.model('Mensaje', Mensaje);