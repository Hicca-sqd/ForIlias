var mongoose = require("mongoose")

var EmployerSchema = mongoose.Schema({
	name: String,
	profession: String, 
	skill: String, 
	link: String
});

module.exports = mongoose.model('Employer', EmployerSchema)