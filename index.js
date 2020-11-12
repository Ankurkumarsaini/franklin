// const createError = require('http-errors');
var express = require('express');
//const  path = require('path');
//const  cookieParser = require('cookie-parser');
//const logger = require('morgan');

/*
var indexRouter = require('./routes/index');
var ideasRouter = require('./routes/ideas');
var gcpTasksRouter = require('./routes/gcpTasks');
var demoRouter = require('./routes/demo');
*/
var app = express();

/*
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
*/
var Port = process.env.PORT || 8100;

app.get('/', (req, res) => {
	res.status(200).send('Server is working.');
});

app.listen(Port, () => {
	console.log(`🌏 Server is running at http://localhost:${Port}`);
});


//app.use('/', indexRouter);
//app.use('/ideas', ideasRouter);
//app.use('/gcptasks', gcpTasksRouter);
//app.use('/demo',demoRouter);

/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/

app.listen(Port,()=>{
  console.log(`app listening on port ${Port}`);
});
