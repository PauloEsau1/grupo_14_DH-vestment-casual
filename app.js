const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({
    secret: "Es un secreto",
    resave: false,
    saveUninitialized:false
}));
app.use(cookies());
app.use(userLoggedMiddleware);  // este debe ir despues de la sesion

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);


app.use(function(req, res, next) {next(createError(404))});

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports=app;