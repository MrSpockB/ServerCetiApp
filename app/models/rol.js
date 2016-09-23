var bookshelf = require('./../config/bookshelf');

var Rol = bookshelf.Model.extend({
	tableName: 'roles'
});

module.exports = bookshelf.model('Rol', Rol);