var Usuario = require('./../models/user');
var Grupo = require('./../models/grupo');

module.exports = {
	index: 
	{
		get: function(req, res, next)
		{
			Usuario.fetchAll()
			.then(function(noticias){
				res.json(noticias);
			}).catch(function(err){
				res.json(err);
			})
		},
		post: function(req, res, next)
		{
			new Usuario({
				email: req.body.email,
				nombre: req.body.nombre,
				password: req.body.password,
				rol_id: req.body.rol_id
			}).save()
				.then(function(usuario){
					res.json(usuario);
				}).catch(function(err){
					res.json(err);
				});
		}
	},
	"view/:usuarioID":
	{
		put: function(req, res, next)
		{
			Usuario.forge({ id: req.params.usuarioID,
				email: req.body.email,
				nombre: req.body.nombre,
				password: req.body.password,
				rol_id: req.body.rol_id
			})
			.save()
			.then(function(usuario){
				
		    res.json(usuario);

			})
			.catch(function(err){
				res.json(err);
			})
		},
		delete: function(req, res, next)
		{
			new Usuario({id: req.params.usuarioID})
            .destroy()
			.then(function(usuario){
				
		    res.json(usuario);

			})
			.catch(function(err){
				res.json(err);
			})
		}
	},
	":usuarioID/grupos":
	{
		get: function(req, res, next)
		{
			new Usuario({id: req.params.usuarioID})
			.fetch({
				withRelated: [
					'grupos'
				]
			})
			.then(function(usuario){
				res.json(usuario);
			})
			.catch(function(err){
				res.json(err);
			});
		}
	},
	":usuarioID/noticias":
	{
		get: function(req, res, next)
		{
			new Usuario({id: req.params.usuarioID})
			.fetch({
				withRelated: [
					'grupos'
				]
			})
			.then(function(usuario){
				res.json(usuario);
			})
			.catch(function(err){
				res.json(err);
			});
		}
	},
	"grupos":
	{
		get: function(req, res, next)
		{
			console.log(res.userID);
			new Usuario({id: res.userID})
			.fetch({
				withRelated: [
					'grupos'
				]
			})
			.then(function(usuario){
				res.json(usuario);
			})
			.catch(function(err){
				res.json(err);
			});
		}
	},
	"noticias":
	{
		get: function(req, res, next)
		{
			var noticias = [];
			console.log(res.userID);
			new Usuario({id: res.userID})
			.fetch({withRelated: ['grupos.noticias']})
			.then(function(usuario)
			{
				var grupos = usuario.related('grupos');
				grupos.forEach(function(grupo)
				{
					noticias = noticias.concat(grupo.related('noticias').toJSON())
				});
				res.json(noticias);
			})
			.catch(function(err){
				res.json(err);
			});
		}
	},
	"conversaciones":
	{
		get: function(req, res, next)
		{
			var noticias = [];
			console.log(res.userID);
			new Usuario({id: res.userID})
			.fetch({withRelated: ['conversaciones']})
			.then(function(usuario)
			{
				var conversaciones = usuario.related('conversaciones');
				res.json(conversaciones);
			})
			.catch(function(err){
				res.json(err);
			});
		}
	}
};