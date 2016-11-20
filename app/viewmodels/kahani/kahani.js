define(function(require){
    var AboutUs = {};
    var Router = require('plugins/router');
    var Util = require('util');

    AboutUs.canActivate = function canActivate() {
        var router = Router.activeInstruction().fragment;
        Util.showButton(router);
        return true;
    };

    return AboutUs;
});