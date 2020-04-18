let express       = require('express');
let router        = express.Router();
const Controller  = require('../app/Controller');

let router_ = route_url = new_route_name = route_name = {};
// console.log(Controller.Backend.HomeController.index.toString());

class Web
{
  constructor(){
    this.routes();
    this.moduleExport();
  }
  routes(){
    this.router_prefix();

    router.prefix('/admin', async (admin) => {
      admin.route("/").get(Controller.Backend.HomeController.index).$$admin_index$$;
      admin.route('/submit/:id').get(Controller.Backend.HomeController.submitId).$$admin_submit_id$$;
      admin.route('/delete/:id').get(Controller.Backend.HomeController.delete).$$admin_delete$$;
      admin.route('/submit').post(Controller.Backend.HomeController.submit).$$admin_submit$$;
      admin.route('/home').get(Controller.Backend.HomeController.home).$$admin_home$$;
    });
    router.prefix('/', async (index) => {
      index.route('/').get(Controller.Backend.HomeController.index).$$index$$;
      index.route('/home').get(Controller.Backend.HomeController.home).$$home$$;
    });
  }

  router_prefix(){
    express.application.prefix = express.Router.prefix = function (path, configure) {
      router_ = express.Router();
      configure(router_);
      this.use(path, router_);
      
      route_url = (configure.toString()).match(/[\'\"].+[\'\"]/gm);
      new_route_name = (configure.toString().match(/\$\$(\w+)\$\$/gm)).toString().match(/(\w+)/gm);
      route_name = {};
      new_route_name.forEach((element, key) => {
        route_name[element] = (path + route_url[key].replace(/["']/gm, '')).replace('//', '/');
      });
      
      express.application.route_name = { ...express.application.route_name, ...route_name };

      return router_;
    };
  }

  moduleExport(){
    module.exports = {
      router: router,
      route_name: express.application.route_name,
    };
  }
}

new Web();