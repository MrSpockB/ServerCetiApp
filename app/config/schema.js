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
		password: {type: 'string', nullable: false}
	}
};
module.exports = Schema;