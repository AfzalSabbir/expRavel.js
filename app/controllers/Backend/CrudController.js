const express = require('express');
const app = express();
let data = require('../../../private/data');
const logo = '(R)';
let arr = [];

class CrudContrller
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
                    this_route: 'admin.crud',
                    showForm: true,
                    arr: arr
                };
                res.render('backend/crud', data);
            },
            submit: (req, res, next) => {
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
        }
    }
}

new CrudContrller();