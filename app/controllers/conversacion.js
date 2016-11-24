var Conversacion = require('./../models/conversacion');

module.exports = {
	index: 
	 {

	 	post: function(req, res, next){
	 		new Conversacion({
	 			nombre: req.body.nombre,
	 			tipo: req.body.tipo
	 		}).save().then(function(mensaje){

				  return mensaje.usuarios().attach([req.body.usuarioID, req.body.usuario2ID]);

	 			res.json(mensaje);
	 		}).catch(function(err){
	 			res.json(err);
			})
	 	}
	 },
	"grupo/:id":{
		get: function(req, res, next){
			 Conversacion.query('where', 'grupo_id', '=', req.params.id).fetchAll({ 
        withRelated: [ 
          'grupo', 'usuario' 
        ] 
      }).then(function(conver){
	 			res.json(conver);
	 		}).catch(function(err){
	 			res.json(err);
			})
	 	}
	},
	"user/:id":{
		get: function(req, res, next){
			 Conversacion.query('where', 'usuario_id', '=', req.params.id).fetchAll({withRelated: [ 
          'grupo', 'usuario'
        ] }).then(function(conver){
	 			res.json(conver);
	 		}).catch(function(err){
	 			res.json(err);
			})
	 	}
	},
	":conversacionID/mensajes":
	{
		get: function(req, res, next)
		{
			new Conversacion({id: req.params.conversacionID})
			.fetch({
				withRelated: [
					'mensajes'
				]
			})
			.then(function(conversacion){
				var mensajes = conversacion.related('mensajes');
				res.json(mensajes);
			})
			.catch(function(err){
				res.json(err);
			});
		}
	},
	":conversacionID/:usuarioID":
	{
		get: function(req, res, next)
		{
			new Conversacion({id: req.params.conversacionID})
			.fetch({
				withRelated: [
					'usuarios'
				]
			})
			.then(function(conversacion){
				res.json(mensajes);
			})
			.catch(function(err){
				res.json(err);
			});
		}
	},
	
};