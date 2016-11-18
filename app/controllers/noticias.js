var Noticia = require('./../models/noticia');
var Grupo = require('./../models/grupo');

module.exports = {
	index: 
	{
		get: function(req, res, next)
		{
			Noticia.forge().orderBy('fecha', 'DESC').fetchAll()
			.then(function(noticias){
				res.json(noticias);
			}).catch(function(err){
				res.json(err);
			})
		},
		post: function(req, res, next)
		{
			console.log(req.body.etiquetas);
			new Noticia({
				titulo: req.body.titulo,
				texto: req.body.texto,
				fecha: req.body.fecha,
				imagenSrc: req.body.imagenSrc,
				usuario_id: res.userID
			}).save()
				.then(function(noticia){
					res.json({message: "Noticia subida correctamente"});
				}).catch(function(err){
					res.json({message: "Hubo un problema al subir la noticia"});
				});
		}
	},
	"view/:noticiaID":
	{
		get: function(req, res, next)
		{
			Noticia.forge({ id: req.params.noticiaID })
			.fetch()
			.then(function(noticia){
				res.json(noticia);
			})
			.catch(function(err){
				res.json(err);
			})
		}
	}
};