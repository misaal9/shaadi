define(function(require) {
    'use strict';
    var ko = require('knockout'),
        $ = require('jquery');
    
    
    var availableModes = {
        night: 'night',
        bright: 'bright'
    };
    
    var BODY = $('body');
    
    var iconClasses = {
        night: 'fa fa-moon-o fa-3x',
        bright: 'fa fa-sun-o fa-3x'
    };
    
    var NightModeWidget = function NightModeWidget() {
        BODY.addClass(availableModes.bright);
        this.isNightMode = ko.observable(false);
        this.currentModeClass = ko.observable(iconClasses.night);
    };
    
    NightModeWidget.prototype.changeModeHandler = function changeModeHandler() {
        if (this.isNightMode()) {
            this.isNightMode(false);
        } else {
            this.isNightMode(true);
        }
        this.isNightMode() ? this.currentModeClass(iconClasses.bright) : this.currentModeClass(iconClasses.night);
        this.updateCss();
    };
    
    NightModeWidget.prototype.updateCss = function updateCss() {
        var setClassTo = '';
        BODY.removeClass();
        setClassTo = this.isNightMode() ?  availableModes.night : availableModes.bright;
        BODY.addClass(setClassTo);
    };
    
    return NightModeWidget;
});