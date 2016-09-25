define(function(require){
    'use strict';
    
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
                title: 'About Us',
                url: '#about'
            },
            {
                title: 'Venue',
                url: '#venue'
            },
            {
                title: 'Home',
                url: ''
            }
        ];
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

    return ThumbNailsWidget;
});