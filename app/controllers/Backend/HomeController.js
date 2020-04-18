const express = require('express');
const app = express();
let data = require('../../../private/data');
const logo = '(R)';
let arr = [];

class HomeContrller
{
    constructor(){
        module.exports = this.controller();
    }
    controller(){
        return {
            index: (req, res, next) => {
                data = {
                    ...data,
                    title: 'expRavel',
                    pre: logo,
                    this_route: 'admin_index',
                    condition: true,
                    arr: arr
                };
                res.render('backend/pages/index', data);
            },
            home: (req, res, next) => {
                data = {
                    ...data,
                    title: 'Home',
                    pre: logo,
                    this_route: 'admin_home',
                };
                res.render('backend/pages/home', data);
            },
            submitStr: (req, res, next) => {
                res.redirect('/admin');
            },
            submit: (req, res, next) => {
                var id = req.body.id;
                arr.push(id);
                res.redirect('/admin');
            },
            delete: (req, res, next) => {
                var id = req.params.id;
                arr.splice(id, 1);
                res.redirect('/admin');
            },
        }
    }
}

new HomeContrller();