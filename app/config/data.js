var data = {
	roles:
	{
		info:[
			{
				id: 1,
				nombre: "Padre"
			},
			{
				id: 1,
				nombre: "Alumno"
			},
			{
				id: 1,
				nombre: "Alumno"
			},
			{
				id: 1,
				nombre: "Alumno"
			},
			{
				id: 1,
				nombre: "Alumno"
			},
		]
	},
	usuarios:
	{
		info: [
			{
				id: {},
				email: {},
				nombre: {},
				password: {},
				rol_id: {},
				authenticated: {},
				active: {}
			}
		]
	},
	noticias:
	{
		id: {},
		titulo: {},
		texto: {},
		fecha: {},
		imagenSrc: {},
		usuario_id: {}
	},
	grupos:
	{
		id: {},
		nombre: {},
		semestre: {},
		nivel: {},
		carrera_division: {},
		tipo: {},
		turno: {}
	},
	conversaciones:
	{
		id: {},
		nombre: {}
	},
	grupo_usuario:
	{
		id: {},
		grupo_id: {},
		usuario_id: {}
	},
	grupo_noticia:
	{
		id: {},
		grupo_id: {},
		noticia_id: {}
	},
	conversacion_usuario:
	{
		id: {},
		conversacion_id: {},
		usuario_id: {}
	},
	mensaje:
	{
		id: {},
		texto: {},
		fecha: {},
		conversacion_id: {},
		remitente_id: {}
	},
	materia:
	{
		id: {},
		codigo: {},
		nombre: {},
		nivel: {}
	},
	grupo_materia:
	{
		id: {},
		grupo_id: {},
		materia_id: {}
	},
	comentarios: 
	{ 
	    id: {}, 
	    texto: {}, 
	    fecha: {}, 
	    noticia_id: {}, 
	    remitente_id: {}, 
	    comentario_id: {}
	},
	invitaciones:
	{
        id: {},
        user_padre: {},
        user_hijo: {},
	    estatus: {}

	}
};
module.exports = data;