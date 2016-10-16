define(function(require){
    var router = require('plugins/router');
    
    var shell = {};
   
    shell.router = router;
    shell.activate = function activate(){
        router.map([
            { route: '', moduleId: '../viewmodels/home/home', title: 'Here We Go' },
            { route: 'kahani', moduleId: '../viewmodels/kahani/kahani', title: 'Their Kahani' },
            { route: 'venue', moduleId: '../viewmodels/venue/venue', title: 'Venue Details' },
            { route: 'contact', moduleId: '../viewmodels/contact/contact', title: 'Get In Touch' }
        ])
            .mapUnknownRoutes('viewmodels/whoops/whoops', 'whoops')
            .buildNavigationModel()
        
        return router.activate();
    };
    
    return shell;
});