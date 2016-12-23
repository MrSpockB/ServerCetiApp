var Invitacion = require('./../models/invitacion');

module.exports = {
	index: 
	{
       get: function(req, res, next)
		{
			Invitacion.fetchAll()
			.then(function(invitaciones){
				res.json(invitaciones);
			}).catch(function(err){
				res.json(err);
			})
		},
		post: function(req, res, next)
		{
			new Invitacion({
				//No se manda el id de la invitacion puesto que es AUTO_INCREMENT
				user_padre: req.body.user_padre,
				user_hijo: req.body.user_padre,
				estatus: req.body.estatus
			}).save()
				.then(function(invitacion){
					res.json(invitacion);
				}).catch(function(err){
					res.json(err);
				});
		}
    },

    "pendiente/:id":
	{
		get: function(req, res, next){
			//id es un campo de la tabla invitaciones dentro de la Base De Datos
			 Invitacion.query('where', 'user_hijo', '=', req.params.id).fetch().then(function(invitaciones){
	 			res.json(invitaciones);
	 		}).catch(function(err){
	 			res.json(err);
			})
	 	}
	}
}; 