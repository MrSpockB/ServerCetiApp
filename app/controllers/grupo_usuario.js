var GrupoUsuario = require('./../models/grupo_usuario');

module.exports = {
	index: 
	{
		get: function(req, res, next)
		{
			GrupoUsuario.fetchAll()
			.then(function(grupo_usuario){
				res.json(grupo_usuario);
			}).catch(function(err){
				res.json(err);
			})
		},
		post: function(req, res, next)
		{
			new GrupoUsuario({
				grupo_id: req.body.grupo_id,
				usuario_id: req.body.usuario_id
			}).save()
				.then(function(grupo_usuario){
					res.json(grupo_usuario);
				}).catch(function(err){
					res.json(err);
				});
		}
	},
	"view/:grupoID":
	{
		get: function(req, res, next)
		{
			GrupoUsuario.where({grupo_id: req.params.grupoID })
			.fetchAll()
			.then(function(grupo_usuario){
				res.json(grupo_usuario);
			})
			.catch(function(err){
				res.json(err);
			})
		}
	},
	"deleteUser":
	{
		delete: function(req, res, next)
		{
			new GrupoUsuario({
				grupo_id: req.body.grupo_id,
				usuario_id: req.body.usuario_id
			})
			.destroy()
				.then(function(grupo_usuario){
					res.json(grupo_usuario);
				}).catch(function(err){
					res.json(err);
				});
		}
	}
	
};