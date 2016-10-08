define(function(require){
    'use strict';
    var ko = require('knockout');
    var imgSrc = './app/img/pic_';

    var JumbotronWidget = function JumbotronWidget(settings) {
        this.settings = settings;
        var fullImgPath;
        fullImgPath = imgSrc + this.getRandomImage() + '.jpg';
        console.info('fullImgPath', fullImgPath);
        this.randomImgUrl = ko.observable(fullImgPath);
    };
    
    JumbotronWidget.prototype.getRandomImage = function getRandomImage() {
        return 1;
    };

    return JumbotronWidget;
});