var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var articlesRouter = require('./routes/articles');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(
  'mongodb+srv://admin:1q2w3e@cluster0-fboxz.mongodb.net/test?retryWrites=true&w=majority', 
  {useNewUrlParser: true, useUnifiedTopology: true}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log('connection ok..');
  });


app.use('/', indexRouter);
app.use('/articles', articlesRouter);

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
  res.send(err);
});

module.exports = app;
