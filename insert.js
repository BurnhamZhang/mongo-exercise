var mongoose = require('mongoose');
require('./model');


var Book = mongoose.model('Book');


var book  = new Book({
	name: 'test',
	author: 'sdasd',
	publishTime: new Date()
});

book.save(function(err,book){
		console.log('err',err);

		console.log('book',book);
});