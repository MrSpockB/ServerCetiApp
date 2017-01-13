var bookshelf = require('./../config/bookshelf');

var Respuesta = bookshelf.Model.extend({
    tableName: 'respuestas_comentario',
    comentario: function()
    {
        return this.belongsTo('Comentario', 'comentario_id');
    }
});

module.exports = bookshelf.model('Respuesta', Respuesta);