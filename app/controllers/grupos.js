var Grupo = require('./../models/grupo');
//var GrupoUsuario = require('./../models/grupo_usuario');

module.exports = {
	index: 
	{
		get: function(req, res, next)
		{
			Grupo.fetchAll()
			.then(function(grupos){
				res.json(grupos);
			}).catch(function(err){
				res.json(err);
			})
		},
		post: function(req, res, next)
		{
			new Grupo({
				nombre: req.body.nombre,
				semestre: req.body.semestre
			}).save()
				.then(function(grupo){
					res.json(grupo);
				}).catch(function(err){
					res.json(err);
				});
		}
	},
	"view/:grupoID":
	{
		get: function(req, res, next)
		{
			Grupo.forge({ id: req.params.grupoID })
			.fetch({withRelated:['usuarios']})
			.then(function(grupo){
				res.json(grupo);
			})
			.catch(function(err){
				res.json(err);
			})
		}
	},
	"news/:grupoID":
	{
		get: function(req, res, next)
		{
			Grupo.forge({ id: req.params.grupoID })
			.fetch({withRelated:['noticias']})
			.then(function(grupo){
				res.json(grupo);
			})
			.catch(function(err){
				res.json(err);
			})
		}
	},
	"delete/:grupoID":
	{
		delete: function(req, res, next)
		{
			new Grupo({id: req.params.grupoID})
            .destroy()
			.then(function(grupo){
				
		    res.json(grupo);

			})
			.catch(function(err){
				res.json(err);
			})
		}
	}
};