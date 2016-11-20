define(function(require){
    var router = require('plugins/router'),
        Util = require('util'),
        ko = require('knockout');
    
    var shell = {};
    
    var self = this;
   
    shell.router = router;
    
    shell.showNightModeButton = ko.observable(true);
    shell.showBackButton = ko.observable(false);
    
    shell.canActivate = function canActivate() {
        this.showBackButton(Util.showBackButton());
        this.showNightModeButton(Util.showNightModeButton());
        return true;
    };
    
    Util.showNightModeButton.subscribe(function(nv){
        shell.showBackButton(!nv);
        shell.showNightModeButton(nv);
    });
    
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