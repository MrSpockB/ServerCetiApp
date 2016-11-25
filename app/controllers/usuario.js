var Usuario = require('./../models/user');
var Grupo = require('./../models/grupo');
//var nodemailer = require('nodemailer');
//var xoauth2 = require('xoauth2');
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
	"sendPassword":
	{
		post: function(req, res, next)
		{
			
			//console.log("sendPassword");
			var result;
			var Mensajes_dummy =[];
	 		Mensajes_dummy.push({hola:"hello"});
	 		res.json( Mensajes_dummy );
	 		console.log("param_id: " + req.params.id + " body_id: " + req.body.id);
			// listen for token updates (if refreshToken is set)
			// you probably want to store these to a db
			/*generator.on('token', function(token){
			    console.log('New token for %s: %s', token.user, token.accessToken);
			});
*/
			/*// login
			var transporter = nodemailer.createTransport({
			    service: 'gmail',
			    auth: {
			        xoauth2: xoauth2.createXOAuth2Generator({
			            user: '{username}',
			            clientId: '{Client ID}',
			            clientSecret: '{Client Secret}',
			            refreshToken: '{refresh-token}',
			            accessToken: '{cached access token}'
			        })
			    }
			});*/

			/*// create reusable transporter object using the default SMTP transport
			var transporter = nodemailer.createTransport('smtps://cetiapp.noreply%40gmail.com:cetiapp123456@smtp.gmail.com');

			// setup e-mail data with unicode symbols
			var mailOptions = {
			    from: '"CETI Colomos ?" <cetiapp.noreply@gmail.com>', // sender address
			    to: 'pizana.alfredo@gmail.com', // list of receivers
			    subject: 'Hello ✔', // Subject line
			    text: 'Hello world ?', // plaintext body
			    html: '<b>Hello world ?</b>' // html body
			};

			// send mail with defined transport object
			transporter.sendMail(mailOptions, function(error, info){
			    if(error){
			        return console.log(error);
			    }
			    console.log('Message sent: ' + info.response);
			});
*/


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
			.fetch({withRelated: ['grupos.noticias.usuario']})
			.then(function(usuario)
			{
				var grupos = usuario.related('grupos');
				grupos.forEach(function(grupo)
				{
					noticias = noticias.concat(grupo.related('noticias').orderBy('fecha').toJSON())
				});
				noticias.sort(function(noticia1, noticia2){
					return new Date(noticia2.fecha) - new Date(noticia1.fecha);
				});
				console.log(noticias);
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
			new Usuario({id: res.userID})
			.fetch({withRelated: ['conversaciones.usuarios']})
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