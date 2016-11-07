define(function(require) {
    'use strict';
    var ko = require('knockout'),
        $ = require('jquery'),
        Router = require('plugins/router');

    var BODY = $('body');
    
    var HomeButtonWidget = function HomeButtonWidget() {
        this.currentModeClass = ko.observable('fa fa-home fa-2x');
        this.showHomeButton = ko.observable(false);
        this.isHomePage = ko.observable(true);
        this.bindHandlers();
    };
    
    HomeButtonWidget.prototype.bindHandlers = function bindHandlers() {
        this.onClickHandler = this.goToHome.bind(this);
    };
    
    HomeButtonWidget.prototype.goToHome = function goToHome() {
        Router.navigate('');
    };
    
    return HomeButtonWidget;
});