const namespace = 'app/controllers/Backend';
const express = require('express');
let data = {};

class UserContrller {
    constructor() {
        module.exports = this.controller();
    }
    controller() {
        return {
            index: (req, res, next) => {
                res.send('User');
            }
        }
    }
}

new UserContrller();