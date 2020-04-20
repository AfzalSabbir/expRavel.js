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
                    this_route: 'admin',
                    showForm: true,
                    arr: arr
                };
                res.render('backend/index', data);
            },
            home: (req, res, next) => {
                data = {
                    ...data,
                    title: 'Home',
                    pre: logo,
                    this_route: 'admin.home',
                };
                res.render('backend/home', data);
            },
            register: (req, res, next) => {
                data = {
                    ...data,
                    title: 'Register',
                    pre: logo,
                    success: false,
                    errors: req.session.errors,
                    this_route: 'admin.register',
                };
                res.render('backend/register', data);
                req.session.errors = null;
            },
            registerSubmit: (req, res, next) => {
                req.check('fullname', 'Invalid fullname!').isLength({min: 6});
                req.check('email', 'Invalid email!').isEmail();
                req.check('username', 'Invalid username!').isLength({min: 6});
                req.check('password', 'Invalid password!').isLength({min: 8}).equals(req.body.confirmCassword);
                req.check('mobile', 'Invalid mobile!').isLength({min: 11});
                req.check('comment', 'Invalid comment!');
                
                var errors = req.validationErrors();
                
                if (errors) {
                    req.session.errors = errors;
                    req.session.success = false;
                } else {
                    req.session.success = true;
                }
                res.redirect('/admin/register');
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