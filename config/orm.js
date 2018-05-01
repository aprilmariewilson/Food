var connection = require("./connection.js");

var orm = {
	select: function (WhatToSelect, tableInput){
		var queryString = "SELECT ?? FROM ??";
		connection.query(queryString, [WhatToSelect, tableInput], function(err, result){
			if (err) throw err;
			console.log(result);
		});
	},
		selectAll: function (tableInput, colToSearch, valOfCol) {
			var queryString = "SELECT * FROM ?? WHERE ?? = ?";
			connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result){
				if (err) throw err;
				console.log(result);
			});
		},
		insertOne: function(tableInput,nameInput){
			var queryString = "INSERT INTO ?? VALUES ??";
			connection.query(queryString, [tableInput, nameInput], function(err, result){
				if (err) throw err;
				console.log(result);
			});
		},
		updateOne: function(valOfCol, colToSearch, userChoice) {
			var queryString = "UPDATE ?? WHERE ?? = ?";
			connection.query(queryString, [valOfCol, colToSearch, userChoice], function(err, result){
				if (err) throw err;
				console.log(result);
			});
		}
}
module.exports = orm;