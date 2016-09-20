var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var newsSchema = new Schema({
	
	title: String,
	text: String,
	datePub: Date,
	imgSrc: String

});

mongoose.model('News', newsSchema);