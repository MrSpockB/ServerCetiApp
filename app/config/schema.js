var Schema = 
{
	noticias:
	{
		id: {type: 'increments', nullable: false, primary: true},
		titulo: {type: 'string', maxlength: 150, nullable: false},
		texto: {type: 'string', maxlength: 250, nullable: false},
		fecha: {type: 'dateTime', nullable: false},
		imagenSrc: {type: 'string', maxlength: 250, nullable: true}

	},
	usuarios:
	{
		id: {type: 'increments', nullable: false, primary: true},
		email: {type: 'string', maxlength: 250, nullable: false, unique:true},
		nombre: {type: 'string', maxlength: 150, nullable: false},
		password: {type: 'string', nullable: false},
		rol_id: {type: 'integer', nullable: false, unsigned: true, references: 'roles.id'}
	},
	roles:
	{
		id: {type: 'increments', nullable: false, primary: true},
		nombre: {type: 'string', maxlength: 150, nullable: false}
	},
	grupos:
	{
		id: {type: 'increments', nullable: false, primary: true},
		nombre: {type: 'string', maxlength: 150, nullable: false},
		semestre: {type: 'integer', nullable: false, unsigned: true}
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
	conversaciones:
	{
		id: {type: 'increments', nullable: false, primary: true},
		grupo_id: {type: 'integer', nullable: false, unsigned: true, references: 'grupos.id'},
		usuario_id: {type: 'integer', nullable: false, unsigned: true, references: 'usuarios.id'}
	},
	mensaje:
	{
		id: {type: 'increments', nullable: false, primary: true},
		texto: {type: 'string', maxlength: 250, nullable: false},
		fecha: {type: 'dateTime', nullable: false},
		conversacion_id: {type: 'integer', nullable: false, unsigned: true, references: 'conversaciones.id'},
		remitente_id: {type: 'integer', nullable: false, unsigned: true, references: 'usuarios.id'}
	}
};
module.exports = Schema;