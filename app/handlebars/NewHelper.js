const path = require('path');
const hbs = require('express-handlebars');
const route_name = require(path.join(__basedir, '/routes/web')).route_name;

let newHbs = hbs.create({});

class NewHelper {
    constructor() {
        this.newHelpers();
        this.moduleExports();
    }
    newHelpers() {
        // https://stackoverflow.com/questions/8853396/logical-operator-in-a-handlebars-js-if-conditional
        newHbs.handlebars.registerHelper( {
            eq: function (v1, v2) {
                return v1 === v2;
            },
            ne: function (v1, v2) {
                return v1 !== v2;
            },
            lt: function (v1, v2) {
                return v1 < v2;
            },
            gt: function (v1, v2) {
                return v1 > v2;
            },
            lte: function (v1, v2) {
                return v1 <= v2;
            },
            gte: function (v1, v2) {
                return v1 >= v2;
            },
            and: function () {
                return Array.prototype.slice.call(arguments).every(Boolean);
            },
            or: function () {
                return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
            }
        });
        newHbs.handlebars.registerHelper( {
            route: function (route) {
                return route_name[route];
            },
            nav_active: function (this_route, target_route) {
                if (this_route == target_route) {
                    return 'active';
                } else {
                    return '';
                }
            },
            concat: function (str1, str2) {
                return str1 + str2;
            },
        });
        

    }
    moduleExports() {
        module.exports = newHbs;
    }
}

new NewHelper()