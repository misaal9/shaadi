/*BACKUP OF ORIGINAL*/
define(function(require) {
    'use strict';
    require('https://maps.googleapis.com/maps/api/js?key=AIzaSyAdAb6IX85c4GH9kp8lKULbCtUDCfCnKyk');
    
    var GMaps = function GMaps(settings) {
        this.settings = settings;
        console.info('this.settings', settings);
        
    };
    
    GMaps.prototype.compositionComplete = function compositionComplete() {
        this.myMap();
    };

    GMaps.prototype.myMap = function myMap() {
            var usClub = new google.maps.LatLng(18.896647, 72.809478);
            var sayaji = new google.maps.LatLng(18.599503, 73.755148);

            var myCenter = usClub;
            var mapCanvas = document.getElementById("map");
            var mapOptions = {center: myCenter, zoom: 12};
            var map = new google.maps.Map(mapCanvas, mapOptions);
            var marker = new google.maps.Marker({position:myCenter, animation:google.maps.Animation.BOUNCE });

            var map = new google.maps.Map(mapCanvas, mapOptions);
            marker.setMap(map);
    };

    return GMaps;
});