var Rol = require('./../models/rol');
/*Christian Cardenas Alvarez  31/03/2017-->Este controlador está diseñado para administrar los roles que 
  se tienen  dentro de la aplicación  (estudiante, profesor, padre de familia)*/
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
    /*Este metodo se encarga de obtener la información (nombre, correo, id,etc) del usuario acorde al rol
    que tiene dentro de la  aplicación*/
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