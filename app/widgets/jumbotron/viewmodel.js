define(function(require){
    'use strict';
    var ko = require('knockout');
    var imgSrc = './app/img/p';

    var JumbotronWidget = function JumbotronWidget(settings) {
        this.settings = settings;
        var fullImgPath;
        fullImgPath = imgSrc + this.getRandomImage() + '.jpg';
        console.info('fullImgPath', fullImgPath);
        this.randomImgUrl = ko.observable(fullImgPath);
    };
    
    JumbotronWidget.prototype.getRandomImage = function getRandomImage() {
        var totalNumOfPics = 6;
        var randomPicNo = Math.ceil(Math.random() * totalNumOfPics)
        return randomPicNo;
    };

    return JumbotronWidget;
});