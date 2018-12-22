var mongoose = require("mongoose")

var VideoSchema = mongoose.Schema({
	name: String,
	link: String
});

module.exports = mongoose.model('Video', VideoSchema)