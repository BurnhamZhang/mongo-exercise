var mongoose = require('mongoose');
var uri = 'mongodb://127.0.0.1/test';



mongoose.connect(uri);


var BookSchema = new mongoose.Schema({
	name:String ,
	author : String,
	publishTime :Date
});


mongoose.model('Book',BookSchema);


