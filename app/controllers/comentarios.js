var Comentario = require('./../models/comentario');

module.exports = {
	index: 
	{
		post: function(req, res, next)
		{
			new Comentario({
				texto: req.body.texto,
				fecha: req.body.fecha,
				noticia_id: req.body.noticiaID,
				remitente_id: res.userID,
				comentario_id: req.body.comentarioID
			}).save()
				.then(function(comentario){
					console.log(comentario);
					res.json(comentario);
				}).catch(function(err){
					res.json(err);
				});
		}
    }
};