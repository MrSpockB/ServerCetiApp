var Usuario = require('./../models/user');

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
		}
	  },
	"view/:usuarioID":
	{
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
	}
};