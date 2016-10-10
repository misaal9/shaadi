requirejs.config({
    paths: {
        'text': '../lib/require/text', 
        'knockout': '../lib/knockout/knockout-3.1.0', 
        'jquery': '../lib/jquery/jquery-1.9.1.min', 
        'bootstrap': '../lib/bootstrap/js/bootstrap.min', 
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions',
        'moment': '../lib/moment/moment.min',
        'util': 'util/util'
        //'gmaps': 'https://maps.googleapis.com/maps/api/js?callback=myMap'
    }
});
define(function (require) {
    var system = require('durandal/system'), 
        app = require('durandal/app');
    
    app.title = 'Madhura & Rohit';
    
    app.configurePlugins({
        router: true,
        dialog: true,
        widget: {
            kinds: ['jumbotron', 'thumbnail', 'footer', 'nightmode']
        }
    });
    
    app.start().then(function(){
        app.setRoot('viewmodels/shell/shell');
    });
    
});