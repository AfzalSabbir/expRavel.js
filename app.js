var createError      = require('http-errors');
var express          = require('express');
const basedir        = global.__basedir = __dirname;
var expressValidator = require('express-validator');
var expressSession   = require('express-session');
const hbs            = require('express-handlebars');
var path             = require('path');
var cookieParser     = require('cookie-parser');
var logger           = require('morgan');

const myHelper       = require('./app/Helper');
const NewHelper      = require('./app/handlebars/NewHelper');
const mainRouter     = require('./routes/_web_').router;

const app            = express();

class Server
{
  constructor(){
    this.initDB();
    this.initViewEngin();
    this.initExpressMiddleware();
    this.initRoutes();
    this.initErrorHandler();
    this.initModuleExport();
  }
  
  initViewEngin(){
    // view engine setup
    app.engine('hbs', hbs({
      extname: 'hbs',
      defaultLayout: 'master',
      layoutsDir: path.join(__dirname, '/views/layouts'),
      partialsDir: path.join(__dirname, '/views/partials'),
    }));
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'hbs');
  }
  
  initExpressMiddleware(){
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(expressValidator());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(expressSession({secret: 'max', saveUninitialized: false, resarve: false}));
  }
  
  initRoutes(){
    app.use('/', mainRouter);
  }
  
  initErrorHandler(){
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
  }
  
  initDB(){
    
  }

  initModuleExport(){
    module.exports = app;
  }
}

new Server();