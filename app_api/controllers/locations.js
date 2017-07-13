var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

module.exports.locationsCreate = function (req, res){
	res.status(200);
	res.json({"status" : "success"});
};

var sendJsonResponse = function(req, res){
	sendJsonResponse(res, 200, {"status" : "success"});
};