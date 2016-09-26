var Rol = require('./../models/rol');

module.exports = {
	index: 
	{
       get: function(req, res, next)
		{
			Rol.fetchAll()
			.then(function(roles){
				res.json(roles);
			}).catch(function(err){
				res.json(err);
			})
		},
		post: function(req, res, next)
		{
			new Rol({
				nombre: req.body.nombre
			}).save()
				.then(function(rol){
					res.json(rol);
				}).catch(function(err){
					res.json(err);
				});
		}
    },

    "rolesId/:id":
	{
		get: function(req, res, next){
			//id es un campo de la tabla roles dentro de la Base De
			 Rol.query('where', 'id', '=', req.params.id).fetchAll().then(function(roles){
	 			res.json(roles);
	 		}).catch(function(err){
	 			res.json(err);
			})
	 	},

	}
};