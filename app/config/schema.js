var Schema = 
{
	roles:
	{
		id: {type: 'increments', nullable: false, primary: true},
		nombre: {type: 'string', maxlength: 150, nullable: false}
	},
	usuarios:
	{
		id: {type: 'increments', nullable: false, primary: true},
		email: {type: 'string', maxlength: 250, nullable: false, unique:true},
		nombre: {type: 'string', maxlength: 150, nullable: false},
		password: {type: 'string', nullable: false},
		rol_id: {type: 'integer', nullable: false, unsigned: true, references: 'roles.id'},
		authenticated: {type: 'string', maxlength: 20, nullable: false, defaultTo:'pending'},
		authentication_code: {type:'string', maxlength:4, nullable:true, defaultTo: null},
		active: {type: 'integer', nullable: false, defaultTo: 1}
	},
	noticias:
	{
		id: {type: 'increments', nullable: false, primary: true},
		titulo: {type: 'string', maxlength: 150, nullable: false},
		texto: {type: 'string', maxlength: 250, nullable: false},
		fecha: {type: 'dateTime', nullable: false},
		imagenSrc: {type: 'string', maxlength: 250, nullable: true},
		usuario_id: {type: 'integer', nullable: false, unsigned: true, references: 'usuarios.id'}
	},
	grupos:
	{
		id: {type: 'increments', nullable: false, primary: true},
		nombre: {type: 'string', maxlength: 150, nullable: false},
		semestre: {type: 'integer', nullable: false, unsigned: true},
		nivel: {type: 'string', maxlength: 50, nullable: false},
		carrera_division: {type: 'string', maxlength: 150, nullable: false},
		tipo: {type: 'string', maxlength: 50, nullable: false},
		turno: {type: 'string', maxlength: 50, nullable: false}
	},
	conversaciones:
	{
		id: {type: 'increments', nullable: false, primary: true},
		nombre: {type: 'string', maxlength: 150, nullable: false}
	},
	grupo_usuario:
	{
		id: {type: 'increments', nullable: false, primary: true},
		grupo_id: {type: 'integer', nullable: false, unsigned: true, references: 'grupos.id'},
		usuario_id: {type: 'integer', nullable: false, unsigned: true, references: 'usuarios.id'}
	},
	grupo_noticia:
	{
		id: {type: 'increments', nullable: false, primary: true},
		grupo_id: {type: 'integer', nullable: false, unsigned: true, references: 'grupos.id'},
		noticia_id: {type: 'integer', nullable: false, unsigned: true, references: 'noticias.id'}
	},
	conversacion_usuario:
	{
		id: {type: 'increments', nullable: false, primary: true},
		conversacion_id: {type: 'integer', nullable: false, unsigned: true, references: 'conversaciones.id'},
		usuario_id: {type: 'integer', nullable: false, unsigned: true, references: 'usuarios.id'}
	},
	mensaje:
	{
		id: {type: 'increments', nullable: false, primary: true},
		texto: {type: 'string', maxlength: 250, nullable: false},
		fecha: {type: 'dateTime', nullable: false},
		conversacion_id: {type: 'integer', nullable: false, unsigned: true, references: 'conversaciones.id'},
		remitente_id: {type: 'integer', nullable: false, unsigned: true, references: 'usuarios.id'}
	},
	materia:
	{
		id: {type: 'increments', nullable: false, primary: true},
		codigo: {type: 'string', maxlength: 250, nullable: false},
		nombre: {type: 'string', maxlength: 250, nullable: false},
		nivel: {type: 'string', maxlength: 250, nullable: false}
	},
	grupo_materia:
	{
		id: {type: 'increments', nullable: false, primary: true},
		grupo_id: {type: 'integer', nullable: false, unsigned: true, references: 'grupos.id'},
		materia_id: {type: 'integer', nullable: false, unsigned: true, references: 'materia.id'}
	},
	comentarios: 
	{ 
	    id: {type: 'increments', nullable: false, primary: true}, 
	    texto: {type: 'string', maxlength: 250, nullable: false}, 
	    fecha: {type: 'dateTime', nullable: false}, 
	    noticia_id: {type: 'integer', nullable: false, unsigned: true, references: 'noticias.id'}, 
	    remitente_id: {type: 'integer', nullable: false, unsigned: true, references: 'usuarios.id'}, 
	    comentario_id: {type: 'integer', nullable: false, unsigned: true}
	},
	invitaciones:
	{
        id: {type:"increments",nullable:false,primary:true},
        user_padre: {type:"integer",nullable:false,unsigned: true, references: 'usuarios.id'},
        user_hijo: {type:"integer",nullable:false,unsigned: true, references: 'usuarios.id'},
	    estatus: {type:"integer",nullable:false,unsigned: true, references: 'usuarios.id', defaultTo:0}

	}
};
module.exports = Schema;