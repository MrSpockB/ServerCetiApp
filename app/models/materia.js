var bookshelf = require('./../config/bookshelf');

var Materia = bookshelf.Model.extend({
	tableName: 'materias',
	grupos: function()
	{
		return this.belongsToMany('Grupo', 'grupo_materia', 'materia_id', 'grupo_id');
	},
	profesor: function()
	{
		return this.belongsTo('Usuario', 'maestro_id');
	}
});

module.exports = bookshelf.model('Materia', Materia);