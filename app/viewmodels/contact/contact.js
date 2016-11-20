define(function(require){
    'use strict';
    var Router = require('plugins/router');
    var Util = require('util');
    
    var Contact = {};

    Contact.canActivate = function canActivate() {
        var router = Router.activeInstruction().fragment;
        Util.showButton(router);
        return true;
    };

    return Contact;
});