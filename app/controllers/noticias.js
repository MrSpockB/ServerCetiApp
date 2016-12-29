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
			var etiquetasTemp = req.body.etiquetas;
			var etiquetas = [];
			etiquetasTemp.forEach(function(etiqueta)
			{
				var temp = {};
				Object.keys(etiqueta).forEach(function(param)
				{
					if(etiqueta[param] != "General")
					{
						temp[param] = etiqueta[param];
					}
				});
				etiquetas.push(temp);
			});
			console.log(etiquetas);
			var gruposPromises = [];
			etiquetas.forEach(function(param){
				gruposPromises.push(Grupo.forge().where(param).fetchAll());
			});
			Promise.all(gruposPromises).then(function(grupoCollec)
			{
				var ids = [];
				grupoCollec.forEach(function(grupos)
				{
					//console.log(grupos);
					grupos.forEach(function(grupo)
					{
						console.log(grupo.get('id'));
						ids.push(grupo.get('id'));
					});
				});
				new Noticia({
					titulo: req.body.titulo,
					texto: req.body.texto,
					fecha: req.body.fecha,
					imagenSrc: req.body.imagenSrc,
					usuario_id: res.userID
				})
				.save()
				.then(function(noticia)
				{
					console.log("saved");
					noticia.grupos().attach(ids).then(function(promRes)
					{
						return res.json({message: "Noticia subida correctamente"});
					}).catch(function(err)
					{
						return res.json({message: "Hubo un problema al subir la noticia"});
					});
				}).catch(function(err){
					return res.json({message: "Hubo un problema al subir la noticia"});
				});
			});
		}
	},
	"view/:noticiaID":
	{
		get: function(req, res, next)
		{
			Noticia.forge({ id: req.params.noticiaID })
			.fetch({withRelated: ['usuario', 'comentarios.usuario']})
			.then(function(noticia){
				res.json(noticia);
			})
			.catch(function(err){
				res.json(err);
			})
		},
		delete: function(req, res, next)
		{
			Noticia.forge({ id: req.params.noticiaID })
			.fetch({
				withRelated: ['grupos']
			})
			.then(function(noticia){
				noticia.grupos().detach()
				.then(function(){
					noticia.destroy()
					.then(function(){
						res.json({ success: true, msg: 'Noticia correctamente eliminada'})
					})
				})
			})
			.catch(function(err){
				res.json(err);
			});
		}
	},
	"usuario/:usuarioID":
	{
		get: function(req, res, next)
		{
			Noticia.forge().where({ usuario_id: req.params.usuarioID })
			.fetchAll()
			.then(function(noticias){
				return res.json(noticias);
			})
			.catch(function(err){
				return res.json(err);
			});
		}
	}
};