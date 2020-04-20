const express = require('express');
const path = require('path')
let router = express.Router();
const Controller = require(path.join(__basedir, '/app/Controller'));
const mongo = require('mongodb');

// console.log(mongo);

const assert = require('assert');

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
      admin.route("/").get(Controller.Backend.HomeController.index).name = 'admin';
      admin.route('/submit').post(Controller.Backend.HomeController.submit).name = 'admin.submit';
      admin.route('/submit/:str').get(Controller.Backend.HomeController.submitStr).name = 'admin.submit_str';
      admin.route('/delete/:id').get(Controller.Backend.HomeController.delete).name = 'admin.delete';
      admin.route('/home').get(Controller.Backend.HomeController.home).name = 'admin.home';
      admin.route('/register').get(Controller.Backend.HomeController.register).name = 'admin.register';
      admin.route('/register').post(Controller.Backend.HomeController.registerSubmit).name = 'admin.register.submit';
    });

    router.prefix('/admin/crud', async (crud) => {
      crud.route('/').get(Controller.Backend.CrudController.index).name = 'admin.crud';
      crud.route('/submit').post(Controller.Backend.CrudController.submit).name = 'admin.crud.submit';
    });
    router.prefix('/', async (index) => {
      index.route('/').get(Controller.Backend.HomeController.index).name = 'index';
      index.route('/home').get(Controller.Backend.HomeController.home).name = 'home';
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

      // console.log(route_name);

      express.application.route_name = { ...express.application.route_name, ...route_name };

      return router_;
    };
    function getRouteUrl(configure){
      return (configure.toString()).match(/[\'\"].+[\'\"]\)/gm);
    };
    function getNewRouteName(configure){
      return (configure.toString().match(/[\'\"][A-Za-z\_\-\.]+[\"\']/gm).toString().match(/[A-Za-z\_\-\.]+/gm));
    };
    function getRouteName(path, route_url, key){
      return ((path + route_url[key].replace(/["')]/gm, '')).replace('//', '/')).replace(/\/$/, "");
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