var Noticia = require('./../models/noticia');

module.exports = {
	index: 
	{
		get: function(req, res, next)
		{
			Noticia.fetchAll()
			.then(function(noticias){
				res.json(noticias);
			}).catch(function(err){
				res.json(err);
			})
		},
		post: function(req, res, next)
		{
			new Noticia({
				titulo: req.body.titulo,
				texto: req.body.texto,
				fecha: req.body.fecha,
				imagenSrc: req.body.imagenSrc
			}).save()
				.then(function(noticia){
					res.json(noticia);
				}).catch(function(err){
					res.json(err);
				});
		}
	}
};