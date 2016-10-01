define(function(require){
    var router = require('plugins/router');
    
    var shell = {};
   
    shell.router = router;
    shell.activate = function activate(){
        router.map([
            { route: '', moduleId: '../viewmodels/home/home', title: 'Madhura & Rohit' },
            { route: 'kahani', moduleId: '../viewmodels/kahani/kahani', title: 'The Kahani' },
            { route: 'venue', moduleId: '../viewmodels/venue/venue', title: 'The Venue' },
            { route: 'contact', moduleId: '../viewmodels/contact/contact', title: 'Contact Us' }
        ]).buildNavigationModel()
        
        return router.activate();
    };
    
    return shell;
});