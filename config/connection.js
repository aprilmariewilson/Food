var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 3000

app.use(express.static('view'));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout:"main"}));
app.set('view engine', 'handlebars');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password:'',
	database: 'burgers_db'
});

connection.connect(function(err){
	if (err){
		console.log('error: ' + err.stack);
		return;
	}
	console.log('You are connected:'+ connection.threadId);
});
app.listen(PORT, function(){
	console.log("Server is listening on: http://localhost:" + PORT);
})
module.exports = connection;