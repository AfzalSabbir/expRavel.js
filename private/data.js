class Data {
    constructor() {
        module.exports = this.data();
    }
    data() {
        var this_year = new Date();
        this_year = this_year.toLocaleDateString().split('/')[2]
        
        return {
            icon: '(R)',
            nav: {
                //'route': 'Title',
                'admin'         : 'Dashboard',
                'admin.crud'    : 'Crud',
                'admin.home'    : 'Home',
                'admin.register': 'Register',
            },
            footer: {
                date: this_year > 2020 ? this_year:0,
            }
        }
    }
}

new Data();


