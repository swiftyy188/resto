var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('server-favicon')
var logger = require('morgan');

var app = express();

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended: false'}));
app.use(express.static(path.join(__dirname, 'dist')));

//catch 404 and forward to error handler
app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

//error hadler
app.use(function(err, req, res, next){
	//set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	//render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;

