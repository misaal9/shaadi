define(function(require){
    'use strict';
    var router = require('plugins/router');
    var Util = require('util');
    var Contact = {};
    
    /*Contact.goto = function goto(d,e) {
        var id = e.currentTarget.id,
            page,
            rd = 'https://www.facebook.com/misaal9',
            mt = 'https://www.facebook.com/madhura.tase';
        
        if (id === 'rd') {
            page = rd;
        } else if (id === 'mt') {
            page = mt;
        } else {
            page = 'https://www.facebook.com';
        }
        
        router.navigate(page);
    };*/
    
    return Contact;
});