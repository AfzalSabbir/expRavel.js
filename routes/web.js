let express       = require('express');
let router        = express.Router();
const Controller  = require('../app/Controller');
let router_       = {};

class Web
{
  constructor(){
    this.routes();
    this.moduleExport();
  }
  routes(){
    express.application.prefix = express.Router.prefix = function (path, configure) {
      router_ = express.Router();
      configure(router_);
      this.use(path, router_);
      return router_;
    };

    router.prefix('/', async (index) => {
      index.route('/').get(Controller.Backend.HomeController.index);
      index.route('/submit/:id').get(Controller.Backend.HomeController.submitId);
      index.route('/delete/:id').get(Controller.Backend.HomeController.delete);
      index.route('/submit').post(Controller.Backend.HomeController.submit);
      index.route('/home').get(Controller.Backend.HomeController.home);
    });
  }
  moduleExport(){
    module.exports = router;
  }
}

new Web();