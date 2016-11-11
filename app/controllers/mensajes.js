var Mensajes = require('./../models/mensaje');

module.exports = {
	index: 
	 {
	 	//esta funcion trae todos los mensajes
	 	post: function(req, res, next){
	 		new Mensajes({
	 			conversacion_id: req.body.idConversacion,
	 			texto: req.body.texto,
	 			fecha: req.body.fecha,
	 			remitente_id: req.body.idremitente
	 		}).save().then(function(mensaje){
	 			res.json(mensaje);
	 		}).catch(function(err){
	 			res.json(err);
			})
	 	}
	 },
	
	"conv/:id":
	{
		get: function(req, res, next){
			//conversacion_id es un campo de la tabla mensaje, por la que voy a hacer la consulta "traeme todo donde conversacion_id sea igual a id"
			 Mensajes.query('where', 'conversacion_id', '=', req.params.id).fetchAll().then(function(mensajes){
	 			res.json(mensajes);
	 		}).catch(function(err){
	 			res.json(err);
			})
	 	}

	}
};