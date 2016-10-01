define(function(require){
    'use strict';
    var router = require('plugins/router');
    var Util = {};
    
    Util.goto = function goto(page) {
        router.navigate(page);
    };
    
    return Util;
});