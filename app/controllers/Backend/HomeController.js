const namespace     = 'app/controllers/Backend';
const express       = require('express');
const route_name    = require('../../../routes/web');
const app           = express();
let data            = {
    icon: 'expRavel.js',
};
let arr = ['a', 'b', 'c'];

// console.log(express.application);

class HomeContrller
{
    constructor(){
        module.exports = this.controller();
    }
    controller(){
        return {
            index: (req, res, next) => {
                console.log(data);
                
                data = {
                    ...data,
                    title: 'expRavel',
                    condition: true,
                    arr: arr
                };
                console.log(data);
                res.render('backend/pages/index', data);
            },
            submitId: (req, res, next) => {
                data = {
                    ...data,
                    title: `Express ID: ${req.params.id}`,
                    condition: true,
                    ID: req.params.id,
                    arr: arr
                };
                res.render('backend/pages/index', data);
            },
            submit: (req, res, next) => {
                var id = req.body.id;
                arr.push(id);
                res.redirect('/admin/submit/' + id);
            },
            delete: (req, res, next) => {
                var id = req.params.id;
                arr.splice(id, 1);
                res.redirect('/admin/submit/'+id);
            },
            home: (req, res, next) => {
                data = {
                    ...data,
                    title: 'Home'
                };
                res.render('backend/pages/home', data);
            }
        }
    }
}

new HomeContrller();