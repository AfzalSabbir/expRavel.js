const express = require('express');

class Helper {
    constructor() {
        this.helpers();
        this.moduleExport();
    }
    helpers() {
        return {
            constant: {},
            /* Don't delete this */

            /*Write Your Functions here!!!*/
            sum: () => {
                console.log('sum');
            },
        }
    }
    moduleExport() {
        module.exports = this.helpers();
    }
}

new Helper();