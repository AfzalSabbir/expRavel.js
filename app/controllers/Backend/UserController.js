const express = require('express');
const app = express();
let data = require('../../../private/data');
const logo = '(R)';

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