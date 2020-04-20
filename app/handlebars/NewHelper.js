const path = require('path');
const hbs = require('express-handlebars');
const helpers = require('handlebars-helpers')();
const route_name = require('../../routes/_web_').route_name;

let newHbs = hbs.create({});

class NewHelper {
    constructor() {
        this.newHelpers();
        this.moduleExports();
    }
    newHelpers() {
        // https://stackoverflow.com/questions/8853396/logical-operator-in-a-handlebars-js-if-conditional
        newHbs.handlebars.registerHelper( {
            eq: (v1, v2)  => v1 === v2,
            ne: (v1, v2)  => v1 !== v2,
            lt: (v1, v2)  => v1 < v2,
            gt: (v1, v2)  => v1 > v2,
            lte: (v1, v2) => v1 <= v2,
            gte: (v1, v2) => v1 >= v2,
            and: ()       => Array.prototype.slice.call(arguments).every(Boolean),
            or: ()        => Array.prototype.slice.call(arguments, 0, -1).some(Boolean),
        });
        newHbs.handlebars.registerHelper( {
            routes: ()                             => route_name,
            route: (route)                         => route_name[route],
            concat: (str1, str2)                   => str1 + str2,
            nav_active: (this_route, target_route) => {
                if (this_route == target_route) {
                    return 'active';
                } else {
                    return '';
                }
            },
        });
        

    }
    moduleExports() {
        module.exports = newHbs;
    }
}

new NewHelper()