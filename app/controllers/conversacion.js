var Conversacion = require('./../models/conversacion');

module.exports = {
	index: 
	 {

	 	post: function(req, res, next){
	 		new Conversacion({
	 			grupo_id: req.body.idGrupo,
	 			usuario_id: req.body.idUser
	 		}).save().then(function(mensaje){
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
	}

	
};