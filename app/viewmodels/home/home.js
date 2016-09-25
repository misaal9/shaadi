define(function(require){
    var router = require('plugins/router');
    var Home = {};
    
    Home.routeMe = function routeMe() {
        router.navigate('#venue');
    };
    
    return Home;
});