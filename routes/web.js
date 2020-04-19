const express = require('express');
const path = require('path')
let router = express.Router();
const Controller = require(path.join(__basedir, '/app/Controller'));

let router_ = route_url = new_route_name = route_name = {};

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
      admin.route('/submit').post(Controller.Backend.HomeController.submit).$$admin_submit$$;
      admin.route('/submit/:str').get(Controller.Backend.HomeController.submitStr).$$admin_submit_str$$;
      admin.route('/delete/:id').get(Controller.Backend.HomeController.delete).$$admin_delete$$;
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
      
      route_url = getRouteUrl(configure);
      new_route_name = getNewRouteName(configure);
      route_name = {};
      new_route_name.forEach((element, key) => {
        route_name[element] = getRouteName(path, route_url, key);
      });
      
      express.application.route_name = { ...express.application.route_name, ...route_name };

      return router_;
    };
    function getRouteUrl(configure){
      return (configure.toString()).match(/[\'\"].+[\'\"]/gm);
    };
    function getNewRouteName(configure){
      return (configure.toString().match(/\$\$(\w+)\$\$/gm)).toString().match(/(\w+)/gm);
    };
    function getRouteName(path, route_url, key){
      return ((path + route_url[key].replace(/["']/gm, '')).replace('//', '/')).replace(/\/$/, "");
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