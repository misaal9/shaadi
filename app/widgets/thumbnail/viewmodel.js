define(function(require){
    'use strict';
    var Util = require('util');
    
    var ThumbNailsWidget = function ThumbNailsWidget(settings) {
        this.settings = settings;
        this.data = {};
        this.setupData();
        this.getThumbs();
        console.info('settings', settings)
    };
    
    ThumbNailsWidget.prototype.setupData = function setupData() {
        this.data.thumbs = [
            {
                title: 'The Kahani',
                className: 'fa fa-star fa-5x red',
                url: '#kahani'
            },
            {
                title: 'The Venue',
                className: 'fa fa-map-marker fa-5x blue',
                url: '#venue'
            },
            {
                title: 'The Holmes',
                className: 'fa fa-asterisk fa-5x green',
                url: ''
            }
        ];
        
        this.goto = this.goto.bind(this);
    };
    
    
    ThumbNailsWidget.prototype.getThumbs = function getThumbs() {
        var numOfBoxes = this.data.thumbs.length;
        
        var columnsMd = 12/numOfBoxes;
        //var columnsXs = numOfBoxes * 2;
        
        this.data.count = numOfBoxes;
        this.data.colClassMd = 'col-xs-' + columnsMd;
        //this.data.colClassXs = 'col-xs-' + columnsXs;
        
        this.data.gridClass = this.data.colClassMd + ' ' + this.data.colClassXs;
    };
    
    ThumbNailsWidget.prototype.goto = function goto(page) {
        Util.goto(page.url);
    };

    return ThumbNailsWidget;
});