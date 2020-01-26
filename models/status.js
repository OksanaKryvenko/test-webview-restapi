//dependencies:
var restful = require('node-restful');
var mongoose = restful.mongoose;

var statusSchema = new mongoose.Schema({
	timezone: String
});

//return models:
module.exports = restful.model('tblstatus', statusSchema);
