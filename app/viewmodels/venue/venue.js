define(function(require){
    'use strict';
    var Router = require('plugins/router');
    var Venue = {};
    
    /*var usClub = new google.maps.LatLng(18.896647, 72.809478);
    var sayaji = new google.maps.LatLng(18.599503, 73.755148);*/
    
    var LOC = {
        mumbai: {
            id: 'mum',
            lat: '18.896647',
            long: '72.809478'
        },
        pune: {
            id: 'pun',
            lat: '18.599503',
            long: '73.755148'
        },
    };
    
    Venue.showMap = function showMap(d,e) {
        var url = 'https://www.google.com/maps/place/',
            id = e.currentTarget.id,
            lat, long;

        if (id === LOC.mumbai.id) {
            lat = LOC.mumbai.lat;
            long = LOC.mumbai.long;
        } else {
            lat = LOC.pune.lat;
            long = LOC.pune.long;
        }
        
        url = url + lat + ',' + long;

        window.open(url, '_blank')
    };

    return Venue;
});