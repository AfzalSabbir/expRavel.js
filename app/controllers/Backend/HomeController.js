const namespace = 'app/controllers/Backend';
const express = require('express');
let data = {};
let arr = ['a', 'b', 'c'];
const init = 1;

class HomeContrller
{
    constructor(){
        module.exports = this.controller();
    }
    controller(){
        return {
            index: (req, res, next) => {
                data = {
                    title: 'Express',
                    condition: true,
                    init: init,
                    arr: arr
                };
                res.render('backend/pages/index', data);
            },
            submitId: (req, res, next) => {
                data = {
                    title: `Express ID: ${req.params.id}`,
                    condition: true,
                    ID: req.params.id,
                    init: init,
                    arr: arr
                };
                res.render('backend/pages/index', data);
            },
            submit: (req, res, next) => {
                var id = req.body.id;
                arr.push(id);
                res.redirect('/submit/' + id);
            },
            delete: (req, res, next) => {
                var id = req.params.id;
                arr.splice(id, 1);
                res.redirect('/submit/'+id);
            },
            home: (req, res, next) => {
                data = {
                    title: 'Home'
                };
                res.render('backend/pages/home', data);
            }
        }
    }
}

new HomeContrller();