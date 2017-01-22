var data = {
		roles: 
			[{
				"id":"1",
				"nombre":"Alumno"
			}, 
			{
				"id":"2",
				"nombre":"Maestro"
			}],
    	usuarios: 
    		[{
    			"id":"1",
    			"email":"ramon@ceti.mx",
    			"nombre":"Ramon Navarro Marquez",
    			"password":"$2a$10$uQPYAmNLE4y8bhCsXyzYhOEjIvKOrEtN2Uw8xFOfXb6gCQjBTBE5i",
    			"rol_id":"1",
    			"authenticated":"pending",
    			"active":"1"
    		}, 
    		{
    			"id":"2",
    			"email":"jose@ceti.mx",
    			"nombre":"Jos\u00e9 Francisco Pe\u00f1a Estrada",
    			"password":"$2a$10$WIhkrMwkFV7kskYRWGwUmeRSXNNjlmps\/ZV7oEnuk6c.\/Bjz8FGEO",
    			"rol_id":"1",
    			"authenticated":"pending",
    			"active":"1"
    		}, 
    		{	
    			"id":"3",
    			"email":"ivan@ceti.mx",
    			"nombre":"Iv\u00e1n Barragan D\u00edaz",
    			"password":"$2a$10$OPTddY3sdThmYymFctw0CeYSK9TnPpfLsybVPwF2Xq8UQdRTe1pyi",
    			"rol_id":"1",
    			"authenticated":"pending",
    			"active":"1"
    		}, 
    		{
    			"id":"4",
    			"email":"luis@ceti.mx",
    			"nombre":"Luis Alberto Ponce",
    			"password":"$2a$10$kvWMOjWQLxKQOSPAmXKGZeJGwTdEO.oR0SfbxiFwYNiEoDHI8b3zC",
    			"rol_id":"1",
    			"authenticated":"pending",
    			"active":"1"
    		}, 
    		{
    			"id":"5",
    			"email":"profe1@ceti.mx",
    			"nombre":"Profe 1",
    			"password":"$2a$10$Rh\/bpUfFkCvIFQzaYjdikeS.fazTkxUYVfQn1grV2zfF625QIts\/2",
    			"rol_id":"2",
    			"authenticated":"pending",
    			"active":"1"
    		},
    		{
    			"id":"6",
    			"email":"profe2@ceti.mx",
    			"nombre":"Profe 2",
    			"password":"$2a$10$Dkjq.10NPk7CKrhIQtu6Veh3QG70CQ9uXIhlR5OW6uQ6SZv53mfEi",
    			"rol_id":"2",
    			"authenticated":"pending",
    			"active":"1"
    		}, 
    		{
    			"id":"7",
    			"email":"profe3@ceti.mx",
    			"nombre":"Profe 3",
    			"password":"$2a$10$0.NCnd6q\/btInAqyc5xEi.FHtji0.gcOMpThqij1EJBJOV5j0hOKq",
    			"rol_id":"2",
    			"authenticated":"pending",
    			"active":"1"
    		}],
		noticias:
		[{
			"id":"1",
			"titulo":"1ª Convocatoria 2017 del Programa Prepa en Línea-SEP",
			"texto":"La Prepa en línea - SEP es un proyecto innovador y gratuito en el que podrás estudiar desde el lugar en el que te encuentres, a la hora que tú decidas. Se imparte a nivel nacional y con validez oficial. Además, te permite estudiar con una enorme flexibilidad, ya que decidirás el lugar y la hora para entrar a nuestra aula virtual.",
			"fecha":"2016-12-08 09:29:22",
			"fechaCaducidad": "NULL",
			"imagenSrc": "http://www.ceti.mx/images/noticias/24203-prepa-en-linea.jpg",
			"usuario_id":"5"
		}, 
		{
			"id":"2",
			"titulo":"Toma de Protesta CETI Colomos",
			"texto":"¡Egresados (as) de nivel Tecnólogo y de Ingeniería recibieron entusiasmados su Título profesional!\n\n  Luego de un proceso laborioso en sus proyectos, prototipos y algunos mediante la presentación de un reporte de experiencia profesional lograron recibir su título como Tecnólogos profesionales e Ingenieros.",
			"fecha":"2016-12-07 10:24:23",
			"fechaCaducidad": "NULL",
			"imagenSrc":"http://www.ceti.mx/images/noticias/20472-titulaciones.jpg",
			"usuario_id":"5"
		}, 
		{
			"id":"3",
			"titulo":"XXIII Olimpiada Regional de Química",			
			"texto":"¡Excelentes resultados obtuvieron estudiantes de nivel Tecnólogo!\n Estudiantes de nivel Tecnólogo de plantel Colomos sobresalieron en la XXIII Olimpiada Regional de Química.\n El evento organizado por la Secretaría de Educación Jalisco, la Academia Mexicana de Ciencias,  la Asociación Mexicana de Química Analítica, y  CECyTE como sede se realizó el pasado 23 de septiembre.",
			"fecha":"2016-11-22 19:28:55",
			"fechaCaducidad": "NULL",
			"imagenSrc":"http://www.ceti.mx/images/noticias/09416-olimpiada-quimica.jpg",
			"usuario_id":"7"
		}, 
		{
			"id":"4",
			"titulo":"Corea presente en el CETI",
			"texto":"Seminario: Situación Política y Social de la Península Coreana.\n El Centro de Enseñanza Técnica Industrial y la Embajada de la República de Corea en México será sede del Seminario: Situación Política y Social de la Península de Coreana Sistema Educativo y Becas.\n Se llevará a cabo los días 5 y 6 de diciembre en las Instalaciones de CETI Plantel Colomos y el Hotel Fiesta Americana Guadalajara.",
			"fecha":"2016-12-01 19:28:55",
			"fechaCaducidad": "NULL",
			"imagenSrc":"http://www.ceti.mx/images/noticias/05421-seminario-corea.jpg",
			"usuario_id":"7"
		}, 
		{
			"id":"5",
			"titulo":"Noticia caducada",
			"texto":"Noticia caducada1, Noticia caducada1, Noticia caducada1",
			"fecha":"2016-12-01 19:28:55",
			"fechaCaducidad":"2016-01-01 19:28:55",
			"imagenSrc":"http://www.ceti.mx/images/noticias/05421-seminario-corea.jpg",
			"usuario_id":"7"
		}],
		grupos:
		[{
			"id":"1",
			"nombre": "M",
			"descripcion":"8M IDESI",
			"semestre":"8",
			"nivel":"Ingenieria",
			"carrera_division":"Desarrollo de Software",
			"tipo":"Estudiantes",
			"turno":"Vespertino"
		}, 
		{
			"id":"2",
			"nombre": "",
			"descripcion":"Docentes Ing. Ciencias B\u00e1sicas",
			"semestre":"0",
			"nivel":"Ingenieria",
			"carrera_division":"Ciencias Basicas",
			"tipo":"Docentes",
			"turno":"Vespertino"
		}, 
		{
			"id":"3",
			"nombre": "",
			"descripcion":"Docentes Tec. Informatica",
			"semestre":"0",
			"nivel":"Tecnologo",
			"carrera_division":"Informatica",
			"tipo":"Docentes",
			"turno":"Matutino"
		}, 
		{
			"id":"4",
			"nombre": "C",
			"descripcion":"6C Tec. Informatica",
			"semestre":"6",
			"nivel":"Tecnologo",
			"carrera_division":"Informatica",
			"tipo":"Estudiantes",
			"turno":"Matutino"
		}, 
		{
			"id":"5",
			"nombre": "A",
			"descripcion":"6A Ingenieria Mecatronica",
			"semestre":"6",
			"nivel":"Ingenieria",
			"carrera_division":"Mecatronica",
			"tipo":"Estudiantes",
			"turno":"Matutino"
		}, 
		{
			"id":"6",
			"nombre": "B",
			"descripcion":"6B Ingenieria Mecatronica",
			"semestre":"6",
			"nivel":"Ingenieria",
			"carrera_division":"Mecatronica",
			"tipo":"Estudiantes",
			"turno":"Vespertino"
		}, 
		{
			"id":"7",
			"nombre": "",
			"descripcion":"Docentes Mecatronica Matutino",
			"semestre":"0",
			"nivel":"Ingenieria",
			"carrera_division":"Mecatronica",
			"tipo":"Docentes",
			"turno":"Matutino"
		}, 
		{
			"id":"8",
			"nombre": "",
			"descripcion":"Docentes Mecatronica Vespertino",
			"semestre":"0",
			"nivel":"Ingenieria",
			"carrera_division":"Mecatronica",
			"tipo":"Docentes",
			"turno":"Vespertino"
		}],
		grupo_usuario:
		[{
			"id":"1",
			"grupo_id":"1",
			"usuario_id":"1"
		}, 
		{
			"id":"2",
			"grupo_id":"1",
			"usuario_id":"2"
		}, 
		{
			"id":"3",
			"grupo_id":"1",
			"usuario_id":"3"
		}, 
		{
			"id":"4",
			"grupo_id":"1",
			"usuario_id":"4"
		}, 
		{
			"id":"5",
			"grupo_id":"1",
			"usuario_id":"5"
		}],
		grupo_noticia:
		[{
			"id":"1",
			"grupo_id":"1",
			"noticia_id":"1"
		}, 
		{
			"id":"2",
			"grupo_id":"1",
			"noticia_id":"2"
		}, 
		{
			"id":"3",
			"grupo_id":"1",
			"noticia_id":"3"
		}, 
		{
			"id":"4",
			"grupo_id":"1",
			"noticia_id":"4"
		}],
		conversaciones:
		[{
			"id":"1",
			"nombre":"ING 8M Tecnolog\u00edas Emergentes"
		}, 
		{
			"id":"2",
			"nombre":"ING 8M Proyecto II"
		}, 
		{
			"id":"3",
			"nombre":"ING 8M Redes LAN Y WAN"
		}],
		conversacion_usuario:
		[{
			"id":"1",
			"conversacion_id":"1",
			"usuario_id":"1"
		}, 
		{
			"id":"2",
			"conversacion_id":"1",
			"usuario_id":"2"
		}, 
		{
			"id":"3",
			"conversacion_id":"1",
			"usuario_id":"3"
		}, 
		{
			"id":"4",
			"conversacion_id":"1",
			"usuario_id":"4"
		}, 
		{
			"id":"5",
			"conversacion_id":"2",
			"usuario_id":"1"
		}, 
		{
			"id":"6",
			"conversacion_id":"2",
			"usuario_id":"2"
		}, 
		{
			"id":"7",
			"conversacion_id":"2",
			"usuario_id":"3"
		}, 
		{
			"id":"8",
			"conversacion_id":"2",
			"usuario_id":"4"
		}, 
		{
			"id":"9",
			"conversacion_id":"3",
			"usuario_id":"1"
		}, 
		{
			"id":"10",
			"conversacion_id":"3",
			"usuario_id":"2"
		}, 
		{
			"id":"11",
			"conversacion_id":"3",
			"usuario_id":"3"
		}, 
		{
			"id":"12",
			"conversacion_id":"3",
			"usuario_id":"4"
		}],
		mensajes:
		[{	
			"id":"1",
			"texto":"Primer Mensaje Tecnolog\u00edas Emergentes",
			"fecha":"2016-09-01 13:37:36",
			"conversacion_id":"1",
			"remitente_id":"5"
		}, 
		{
			"id":"2",
			"texto":"Primer Mensaje Proyecto II",
			"fecha":"2016-11-02 10:32:31",
			"conversacion_id":"2",
			"remitente_id":"6"
		}, 
		{
			"id":"3",
			"texto":"Primer Mensaje Redes LAN Y WAN",
			"fecha":"2016-10-05 10:25:00",
			"conversacion_id":"3",
			"remitente_id":"7"
		}, 
		{
			"id":"9",
			"texto":"Que onda",
			"fecha":"2016-11-11 13:10:50",
			"conversacion_id":"1",
			"remitente_id":"1"
		}, 
		{
			"id":"10",
			"texto":"Que paso",
			"fecha":"2016-11-11 13:11:40",
			"conversacion_id":"1",
			"remitente_id":"1"
		}, 
		{
			"id":"11",
			"texto":"Hello World!",
			"fecha":"2016-11-12 08:01:44",
			"conversacion_id":"1",
			"remitente_id":"1"
		}, 
		{
			"id":"12",
			"texto":"Que paso",
			"fecha":"2016-11-16 18:37:03",
			"conversacion_id":"2",
			"remitente_id":"1"
		}],
		materias:
		[{
			"id":"1",
			"codigo":"ING001",
			"nombre":"Tecnolog\u00edas Emergentes",
			"nivel":"Ingenieria",
			"maestro_id": "5"
		}, 
		{
			"id":"2",
			"codigo":"ING002",
			"nombre":"Proyecto II",
			"nivel":"Ingenieria",
			"maestro_id": "6"
		}, 
		{
			"id":"3",
			"codigo":"ING003",
			"nombre":"Redes LAN Y WAN",
			"nivel":"Ingenieria",
			"maestro_id": "7"
		}],
		grupo_materia:
		[{
			"id":"1",
			"grupo_id":"1",
			"materia_id":"1"
		}, 
		{
			"id":"2",
			"grupo_id":"1",
			"materia_id":"2"
		}, 
		{
			"id":"3",
			"grupo_id":"1",
			"materia_id":"3"
		}],
		comentarios:
		[{
			"id":"1",
			"texto":"Comen1",
			"fecha":"2016-11-01 06:16:16",
			"noticia_id":"30",
			"remitente_id":"2",
			"comentario_id":"0"
		}, 
		{
			"id":"2",
			"texto":"Comen2",
			"fecha":"2016-11-02 10:30:28",
			"noticia_id":"30",
			"remitente_id":"3",
			"comentario_id":"0"
		}, 
		{
			"id":"3",
			"texto":"Comen3",
			"fecha":"2016-11-04 19:41:41",
			"noticia_id":"30",
			"remitente_id":"4",
			"comentario_id":"0"
		}, 
		{
			"id":"4",
			"texto":"Pruebaonline",
			"fecha":"2016-11-21 18:28:08",
			"noticia_id":"30",
			"remitente_id":"1",
			"comentario_id":"1"
		}],
		invitaciones:[]
};
module.exports = data;