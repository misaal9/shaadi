define(function(require){
    'use strict';
    var router = require('plugins/router');
    var Util = {};
    var ko = require('knockout');
    
    Util.goto = function goto(page) {
        router.navigate(page);
    };
    
    Util.showNightModeButton = ko.observable(true);
    
    Util.showBackButton = ko.observable(false);
    
    Util.showButton = function showButton(router) {
        if (router === '') {
            this.showBackButton(false);
            this.showNightModeButton(true);
        } else {
            this.showBackButton(true);
            this.showNightModeButton(false);
        }
    };

    return Util;
});