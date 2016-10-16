define(function(require){
    var Util = require('util');
    
    var NotFound = {};
    
    NotFound.goto = function goto(page) {
        Util.goto(page.url);
    };
    
    return NotFound;
});