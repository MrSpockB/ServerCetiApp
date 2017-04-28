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
				user_hijo: req.body.user_hijo,
				estatus: req.body.estatus
			}).save()
				.then(function(invitacion){
					res.json(invitacion);
				}).catch(function(err){
					res.json(err);
				});
		}
    },
    /*La Peticion GET se encarda*/
    "pendiente/:id":
	{
		get: function(req, res, next){
			//id es un campo de la tabla invitaciones dentro de la Base De Datos
			 Invitacion.query('where', 'user_hijo', '=', req.params.id).fetch({withRelated:['padre']}).then(function(invitaciones){
	 			res.json(invitaciones);
	 		}).catch(function(err){
	 			res.json(err);
			})
	 	},
	 	post: function(req, res, next)
		{
		        Invitacion.query('where', 'user_hijo', '=', req.params.id)
		        .save({estatus: 1},{patch:true})
				.then(function(invitacion){
					res.json(invitacion);
				}).catch(function(err){
					res.json(err);
				});
		
	    }
	},
	/*Esta Peticion GET se encarga de obtener las invitaciones pendientes que tenga un padre,
	es enviado como parametro el id del padre utilizando una peticion GET*/
	"pendientePadre/:id":
	{
		get: function(req, res, next){
			//id es un campo de la tabla invitaciones dentro de la Base De Datos
			 Invitacion.query('where',  'estatus', '=', 0, 'user_padre','=',req.params.user_padre)
			 //.andWhere('where', 'estatus', '=', 0)
			 .fetch({withRelated:['hijo']}).then(function(invitaciones){
	 			res.json(invitaciones);
	 		}).catch(function(err){
	 			res.json(err);
			})
	 	}
	}, 
	 /*Esta Peticion POST se encarga de insertar una invitacion en la Base de Datos, los parametros
	 que se mandan son el usuario del padre y del hijo, el id de la invitación es asignado automáticamente
	 puesto que es un tipo de campo AUTO_INCREMENT dentro de la base de datos*/
	"insertarInvitacion":
	{
	 	post: function(req, res, next)
		{
			new Invitacion({
				//No se manda el id de la invitacion puesto que es AUTO_INCREMENT
				user_padre: req.body.user_padre,
				user_hijo: req.body.user_hijo,
				estatus: 0
			}).save()
				.then(function(invitacion){
					res.json(invitacion);
				}).catch(function(err){
					res.json(err);
				});
		}
	},
    
     /*Esta Peticion GET se encarga de obtener la invitacion que ha enviado un padre hacia un hijo,
     se envian como parametros el id del padre e hijo, son enviados a traves del metodo GET*/
     "verificarInvitacion/:idPadre/:idHijo":
     {
     	get: function(req, res, next){
			//id es un campo de la tabla invitaciones dentro de la Base De Datos
			console.log(req.params.idPadre);
			console.log(req.params.idHijo);
			 Invitacion.query('where',  'user_padre', '=', req.params.idPadre, 'user_hijo','=',req.params.idHijo)
			 .fetch({withRelated:['hijo']}).then(function(invitaciones){
	 			res.json(invitaciones);
	 		}).catch(function(err){
	 			res.json(err);
			})
	 	}
     },
  /*Esta Peticion POST se encarga de cambiar una invitacion que ya ha sido almacenada en la Base de Datos
    La invitacion para ser cambiada requiere como parametro el id del padre que solicita el cambio
    dicho id es enviado a traves del metodo POST*/
	"cambiarInvitacion":
	{
	 	post: function(req, res, next)
		{
		        Invitacion.query('where', 'user_padre', '=', req.body.user_padre)
		        .save({user_hijo: req.body.user_hijo},{patch:true})
				.then(function(invitacion){
					res.json(invitacion);
				}).catch(function(err){
					res.json(err);
				});
	    }
	}
	
}; 