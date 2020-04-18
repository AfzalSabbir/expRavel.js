const route_name = require('../../routes/web').route_name;
const helpers = require('handlebars-helpers')();

class Helper
{
    constructor(){
        this.helpers();
        this.moduleExports();
    }
    helpers(){
        helpers.route = (route) => {
            return route_name[route];
        };
        helpers.nav_active = (this_route, target_route) => {
            if (this_route == target_route) {
                return 'active';
            } else {
                return '';
            }
        };
        helpers.concat = (str1, str2) => {
            return str1 + str2;
        };
    }
    moduleExports(){
        module.exports = helpers;
    }
}

new Helper()


