var createError   = require('http-errors');
var express       = require('express');
var validator     = require('express-validator');
var session       = require('express-session');
const hbs         = require('express-handlebars');
var path          = require('path');
var cookieParser  = require('cookie-parser');
var logger        = require('morgan');
const myHelper    = require('./app/Helper');
const route_name  = require('./routes/web').route_name;
const mainRouter  = require('./routes/web').router;
const helpers     = require('handlebars-helpers')();

const app = express();

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
      layoutsDir: path.join(__dirname, '/views/backend/layouts'),
      partialsDir: path.join(__dirname, '/views/backend/partials'),
    }));
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'hbs');
  }
  
  initExpressMiddleware(){
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    // app.use(validator());
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
  }
  
  initRoutes(){
    helpers.route = (route) => {
      return route_name[route];
    }
    app.use('/', mainRouter);
  }
  
  initErrorHandler(){
    // catch 404 and forward to error handler
    app.use(function(req, res, next, route_name) {
      next(createError(404));
    });
    
    // error handler
    app.use(function(err, req, res, next, route_name) {
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