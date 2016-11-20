define(function(require){
    var Router = require('plugins/router');
    var Util = require('util');

    var Home = {};

    Home.canActivate = function canActivate() {
        var router = Router.activeInstruction().fragment;
        Util.showButton(router);
        return true;
    };
    
    return Home;
});