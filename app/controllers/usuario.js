var Usuario = require('./../models/user');
var Grupo = require('./../models/grupo');
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
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
	"sendActivationCode":
	{
		post: function(req, res, next)
		{
			//console.log(("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4));
			console.log("sendActivationCode");
			console.log(req.body);

			//req.body.password


			// login
			var smtpTransport = nodemailer.createTransport({
			    service: 'gmail',
			    auth: {
			         xoauth2: xoauth2.createXOAuth2Generator({
			            user: 'cetiapp.noreply@gmail.com',
			            clientId: '314304623860-ma9g2ol2490l5cn0cq1lhd8diaaijj5s.apps.googleusercontent.com',
			            clientSecret: 'Dh4-gGn_WXulFFwi05gzAiRI',
			            refreshToken: '1/XnddTBoBPiqW05luA_KJacNa3q3W4dhqYQwBq-l9_1Y',
			            accessToken: 'ya29.Ci-hA0ulP6iV_Drq961zatVEd5wXDIT8RWDu7Xo_YYTuliPtQGm5mN53d6UwtVWzYw'
			        })
			    }
			});




			// setup e-mail data with unicode symbols
			var mailOptions = {
			    from: '"CETI Colomos ?" <cetiapp.noreply@gmail.com>', // sender address
			    to: 'pizana.alfredo@gmail.com', // list of receivers
			    subject: 'Hello ✔', // Subject line
			    text: 'Hello world ?', // plaintext body
			    html: '<b>Hello world ?</b>' // html body
			};



			// send mail with defined transport object
			/*smtpTransport.sendMail(mailOptions, function(error, response) {
			  if (error) {
			    console.log(error);
			  } else {
			    console.log(response);
			  }
			  smtpTransport.close();
			});*/




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
	},
	"materias":
	{
		get: function(req, res, next)
		{
			var materias = [];
			new Usuario({id: res.userID})
			.fetch({withRelated: ['grupos.materias.profesor']})
			.then(function(usuario)
			{
				var grupos = usuario.related('grupos');
				grupos.forEach(function(grupo){
					var tempMaterias = grupo.related('materias').toJSON();
					tempMaterias = tempMaterias.map(function(materia)
					{
						materia['grupo'] = grupo.get('semestre') + grupo.get('nombre');
						return materia;
					});
					materias = materias.concat(tempMaterias);
				})
				res.json(materias);
			})
			.catch(function(err){
				res.json(err);
			});
		}
	}
};