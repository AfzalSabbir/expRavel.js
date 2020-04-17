var express = require('express');
var router = express.Router();
const Controller = require('../../app/Controller');

class Web
{
  constructor(){
    this.routes();
    this.moduleExport();
  }
  routes(){
    express.application.prefix = express.Router.prefix = function (path, configure) {
      configure(router);
      this.use(path, router);
      return router;
    };
    router.prefix('/', async (router) => {
      router.route('/').get(Controller.Backend.HomeController.index);
      router.route('/submit/:id').get(Controller.Backend.HomeController.submitId);
      router.route('/delete/:id').get(Controller.Backend.HomeController.delete);
      router.route('/submit').post(Controller.Backend.HomeController.submit);
      router.route('/home').get(Controller.Backend.HomeController.home);
    });
  }
  moduleExport(){
    module.exports = router;
  }
}

new Web();