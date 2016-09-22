var bookshelf = require('./../config/bookshelf')();

var Noticia = bookshelf.Model.extend({
	tableName: 'noticias'
});

module.exports = Noticia;