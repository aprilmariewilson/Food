var express = require('Express');
var models = require("../models/burger.js");
var app = express();

module.exports = function(app) {
	app.get("/api/:burgers?", function(req,res){
		if (req.params.burgers){
			Burger.selectAll({}).then(function(result){
				return res.json(result);
			});
		}
	});
	app.post('/api/new', function(req,res){
		var burger = req.body;
		var routeName = burger.name.replace(/\s+/g, "").toLowerCase();
		Burger.create({
			routeName: routeName,
			name: burger.name,
			devoured: false
		});
	})
}