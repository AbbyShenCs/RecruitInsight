(function ($) {
    "use strict";
    var markerIconhospital = {
        anchor: new google.maps.Point(22, 16),
        url: 'assets/images/hospital.png',
    }
    var markerIconhotel = {
        anchor: new google.maps.Point(22, 16),
        url: 'assets/images/hotel.png',
    }
    var markerIconbuilding = {
        anchor: new google.maps.Point(22, 16),
        url: 'assets/images/building.png',
    }

    function mainMap() {
        function locationData(pageURL, propertyCategory, propertyImg, propertyLocation, propertyTitle, propertyPrice, propertyPeriod, propertyRooms, propertySize, propertyBath, propertyGarage) {
            return ('<div class="map-popup-wrap"><div class="map-popup"><div class="infoBox-close"><i class="fa-times"></i></div><div class="map-popup-category">' + propertyCategory + '</div><a href="' + pageURL + '" class="listing-img-content fl-wrap"><img src="' + propertyImg + '" alt=""></a> <div class="property-address bg-custom-blue"><a href="' + pageURL + '"><i class="flaticon-pin"></i>' + propertyLocation + '</a></div><div class="listing-content fl-wrap"><div class="listing-title fl-wrap"><h4><a href=' + pageURL + ' class="text-theme">' + propertyTitle + '</a></h4><div class="price mb-xl-20 fs-16 fw-700 text-custom-blue">' + propertyPrice + ' <span class="text-light-white fw-500">/ ' + propertyPeriod + '</span></div><ul class="custom property-feature"><li> <i class="flaticon-bed-1"></i><span>' + propertyRooms + '</span></li><li> <i class="flaticon-bath-1"></i><span>' + propertyBath + '</span></li><li><i class="flaticon-selection-1"></i><span>' + propertySize + '</span></li><li><i class="flaticon-car-inside-a-garage"></i><span>' + propertyGarage + '</span></li></ul></div></div></div></div>')
        }
        var locations = [
            [locationData('listing-detail.html', 'Rent', 'assets/images/homepage-1/recent-350x235.jpg', 'Los Angeles, CA 90038', 'Comfortable Apartment', "$ 7500", "Monthly", "2 Bedrooms", "1500 sq ft", "2 Bath", "1 Garage"), 40.72956781, -73.99726866, 0, markerIconhospital],
            [locationData('listing-detail.html', 'Rent', 'assets/images/homepage-1/recent-2-350x235.jpg', 'Los Angeles, CA 90038', 'Comfortable Apartment', "$ 7500", "Monthly", "2 Bedrooms", "1500 sq ft", "2 Bath", "1 Garage"), 40.76221766, -73.96511769, 1, markerIconhotel],
            [locationData('listing-detail.html', 'Rent', 'assets/images/homepage-1/recent-3-350x235.jpg', 'Los Angeles, CA 90038', 'Comfortable Apartment', "$ 7500", "Monthly", "2 Bedrooms", "1500 sq ft", "2 Bath", "1 Garage"), 40.88496706, -73.88191222, 2, markerIconhospital],
            [locationData('listing-detail.html', 'Rent', 'assets/images/homepage-1/sale-350x235.jpg', 'Los Angeles, CA 90038', 'Comfortable Apartment', "$ 7500", "Monthly", "2 Bedrooms", "1500 sq ft", "2 Bath", "1 Garage"), 40.72228267, -73.99246214, 3, markerIconhotel],
            [locationData('listing-detail.html', 'Rent', 'assets/images/homepage-1/sale-2-350x235.jpg', 'Los Angeles, CA 90038', 'Comfortable Apartment', "$ 7500", "Monthly", "2 Bedrooms", "1500 sq ft", "2 Bath", "1 Garage"), 40.94982541, -73.84357452, 4, markerIconhospital],
            [locationData('listing-detail.html', 'Rent', 'assets/images/homepage-1/sale-3-350x235.jpg', 'Los Angeles, CA 90038', 'Comfortable Apartment', "$ 7500", "Monthly", "2 Bedrooms", "1500 sq ft", "2 Bath", "1 Garage"), 40.90261483, -74.15737152, 5, markerIconbuilding],
            [locationData('listing-detail.html', 'Rent', 'assets/images/homepage-1/rent-2-350x235.jpg', 'Los Angeles, CA 90038', 'Comfortable Apartment', "$ 7500", "Monthly", "2 Bedrooms", "1500 sq ft", "2 Bath", "1 Garage"), 40.79145927, -74.08252716, 6, markerIconhospital],
            [locationData('listing-detail.html', 'Rent', 'assets/images/homepage-1/rent-3-350x235.jpg', 'Los Angeles, CA 90038', 'Comfortable Apartment', "$ 7500", "Monthly", "2 Bedrooms", "1500 sq ft", "2 Bath", "1 Garage"), 40.58423508, -73.96099091, 7, markerIconbuilding],
            [locationData('listing-detail.html', 'Rent', 'assets/images/homepage-1/recent-2-350x235.jpg', 'Los Angeles, CA 90038', 'Comfortable Apartment', "$ 7500", "Monthly", "2 Bedrooms", "1500 sq ft", "2 Bath", "1 Garage"), 40.58110616, -73.97678375, 8, markerIconbuilding],
            [locationData('listing-detail.html', 'Rent', 'assets/images/homepage-1/recent-3-350x235.jpg', 'Los Angeles, CA 90038', 'Comfortable Apartment', "$ 7500", "Monthly", "2 Bedrooms", "1500 sq ft", "2 Bath", "1 Garage"), 40.73112881, -74.07897948, 9, markerIconbuilding],
            [locationData('listing-detail.html', 'Rent', 'assets/images/homepage-1/sale-350x235.jpg', 'Los Angeles, CA 90038', 'Comfortable Apartment', "$ 7500", "Monthly", "2 Bedrooms", "1500 sq ft", "2 Bath", "1 Garage"), 40.67386831, -74.10438536, 10, markerIconbuilding],
        ];
        var map = new google.maps.Map(document.getElementById('map-main'), {
            zoom: 9,
            scrollwheel: false,
            center: new google.maps.LatLng(40.7, -73.87),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            panControl: false,
            fullscreenControl: true,
            navigationControl: false,
            streetViewControl: false,
            animation: google.maps.Animation.BOUNCE,
            gestureHandling: 'cooperative',
            styles: [{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }]
            }]
        });
        var boxText = document.createElement("div");
        boxText.className = 'map-box'
        var currentInfobox;
        var boxOptions = {
            content: boxText,
            disableAutoPan: true,
            alignBottom: true,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-145, -45),
            zIndex: null,
            boxStyle: {
                width: "260px"
            },
            closeBoxMargin: "0",
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(1, 1),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false,
        };
        var markerCluster, marker, i;
        var allMarkers = [];
        var clusterStyles = [{
            textColor: 'white',
            url: '',
            height: 50,
            width: 50
        }];
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                icon: locations[i][4],
                id: i
            });
            allMarkers.push(marker);
            var ib = new InfoBox();
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    ib.setOptions(boxOptions);
                    boxText.innerHTML = locations[i][0];
                    ib.close();
                    ib.open(map, marker);
                    currentInfobox = marker.id;
                    var latLng = new google.maps.LatLng(locations[i][1], locations[i][2]);
                    map.panTo(latLng);
                    map.panBy(0, -180);
                    google.maps.event.addListener(ib, 'domready', function () {
                        $('.infoBox-close').click(function (e) {
                            e.preventDefault();
                            ib.close();
                        });
                    });
                }
            })(marker, i));
        }
        var options = {
            imagePath: 'assets/images/building.png',
            styles: clusterStyles,
            minClusterSize: 2
        };
        markerCluster = new MarkerClusterer(map, allMarkers, options);
        google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
        $('.nextmap-nav').click(function (e) {
            e.preventDefault();
            map.setZoom(15);
            var index = currentInfobox;
            if (index + 1 < allMarkers.length) {
                google.maps.event.trigger(allMarkers[index + 1], 'click');
            } else {
                google.maps.event.trigger(allMarkers[0], 'click');
            }
        });
        $('.prevmap-nav').click(function (e) {
            e.preventDefault();
            map.setZoom(15);
            if (typeof (currentInfobox) == "undefined") {
                google.maps.event.trigger(allMarkers[allMarkers.length - 1], 'click');
            } else {
                var index = currentInfobox;
                if (index - 1 < 0) {
                    google.maps.event.trigger(allMarkers[allMarkers.length - 1], 'click');
                } else {
                    google.maps.event.trigger(allMarkers[index - 1], 'click');
                }
            }
        });
        $('.map-item').click(function (e) {
            e.preventDefault();
            map.setZoom(15);
            var index = currentInfobox;
            var marker_index = parseInt($(this).attr('href').split('#')[1], 10);
            google.maps.event.trigger(allMarkers[marker_index], "click");
            if ($(this).hasClass("scroll-top-map")) {
                $('html, body').animate({
                    scrollTop: $(".map-container").offset().top + "-80px"
                }, 500)
            } else if ($(window).width() < 1064) {
                $('html, body').animate({
                    scrollTop: $(".map-container").offset().top + "-80px"
                }, 500)
            }
        });
        // Scroll enabling button
        var scrollEnabling = $('.scrollContorl');
        $(scrollEnabling).click(function (e) {
            e.preventDefault();
            $(this).toggleClass("enabledsroll");
            if ($(this).is(".enabledsroll")) {
                map.setOptions({
                    'scrollwheel': true
                });
            } else {
                map.setOptions({
                    'scrollwheel': false
                });
            }
        });
        var zoomControlDiv = document.createElement('div');
        var zoomControl = new ZoomControl(zoomControlDiv, map);

        function ZoomControl(controlDiv, map) {
            zoomControlDiv.index = 1;
            map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
            controlDiv.style.padding = '5px';
            var controlWrapper = document.createElement('div');
            controlDiv.appendChild(controlWrapper);
            var zoomInButton = document.createElement('div');
            zoomInButton.className = "mapzoom-in";
            controlWrapper.appendChild(zoomInButton);
            var zoomOutButton = document.createElement('div');
            zoomOutButton.className = "mapzoom-out";
            controlWrapper.appendChild(zoomOutButton);
            google.maps.event.addDomListener(zoomInButton, 'click', function () {
                map.setZoom(map.getZoom() + 1);
            });
            google.maps.event.addDomListener(zoomOutButton, 'click', function () {
                map.setZoom(map.getZoom() - 1);
            });
        }
    }
    var map = document.getElementById('map-main');
    if (typeof (map) != 'undefined' && map != null) {
        google.maps.event.addDomListener(window, 'load', mainMap);
    }
    // contactmap
    // $(function () {
    //     if ($('body').is('.contact-page')) {
    //         var markerIcon = {
    //             anchor: new google.maps.Point(22, 16),
    //             url: 'assets/images/icon/marker/location.png',
    //         }

    //         function contactMap() {
    //             function locationData(pageURL, carImg, carTitle, cardescription) {
    //                 return ('<div class="map-popup-wrap"><div class="map-popup"><div class="infoBox-close"><i class="fa-times"></i></div><a href="' + pageURL + '" class="listing-img-content fl-wrap"><img src="' + carImg + '" alt=""></a> <div class="listing-content fl-wrap"><div class="listing-title fl-wrap"><h4 class="mb-2"><a href=' + pageURL + ' class="text-light-black">' + carTitle + '</a></h4><p class="text-dark-grey fs-16">' + cardescription + '</p></div></div></div></div>')
    //             }
    //             var locations = [
    //                 [locationData('#', 'https://via.placeholder.com/300x200', 'New York', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'), 40.72956781, -73.99726866, 0, markerIcon],
    //                 [locationData('#', 'https://via.placeholder.com/300x200', 'New York', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'), 40.67386831, -74.10438536, 10, markerIcon],
    //             ];
    //             var map = new google.maps.Map(document.getElementById('contact-map'), {
    //                 zoom: 9,
    //                 scrollwheel: false,
    //                 center: new google.maps.LatLng(40.7, -73.87),
    //                 mapTypeId: google.maps.MapTypeId.ROADMAP,
    //                 zoomControl: false,
    //                 mapTypeControl: false,
    //                 scaleControl: false,
    //                 panControl: false,
    //                 fullscreenControl: true,
    //                 navigationControl: false,
    //                 streetViewControl: false,
    //                 animation: google.maps.Animation.BOUNCE,
    //                 gestureHandling: 'cooperative',
    //                 styles: [{
    //                     "featureType": "administrative",
    //                     "elementType": "labels.text.fill",
    //                     "stylers": [{
    //                         "color": "#444444"
    //                     }]
    //                 }]
    //             });
    //             var boxText = document.createElement("div");
    //             boxText.className = 'map-box'
    //             var currentInfobox;
    //             var boxOptions = {
    //                 content: boxText,
    //                 disableAutoPan: true,
    //                 alignBottom: true,
    //                 maxWidth: 0,
    //                 pixelOffset: new google.maps.Size(-145, -45),
    //                 zIndex: null,
    //                 boxStyle: {
    //                     width: "260px"
    //                 },
    //                 closeBoxMargin: "0",
    //                 closeBoxURL: "",
    //                 infoBoxClearance: new google.maps.Size(1, 1),
    //                 isHidden: false,
    //                 pane: "floatPane",
    //                 enableEventPropagation: false,
    //             };
    //             var markerCluster, marker, i;
    //             var allMarkers = [];
    //             var clusterStyles = [{
    //                 textColor: 'white',
    //                 url: '',
    //                 height: 50,
    //                 width: 50
    //             }];
    //             for (i = 0; i < locations.length; i++) {
    //                 marker = new google.maps.Marker({
    //                     position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    //                     icon: locations[i][4],
    //                     id: i
    //                 });
    //                 allMarkers.push(marker);
    //                 var ib = new InfoBox();
    //                 google.maps.event.addListener(marker, 'click', (function (marker, i) {
    //                     return function () {
    //                         ib.setOptions(boxOptions);
    //                         boxText.innerHTML = locations[i][0];
    //                         ib.close();
    //                         ib.open(map, marker);
    //                         currentInfobox = marker.id;
    //                         var latLng = new google.maps.LatLng(locations[i][1], locations[i][2]);
    //                         map.panTo(latLng);
    //                         map.panBy(0, -180);
    //                         google.maps.event.addListener(ib, 'domready', function () {
    //                             $('.infoBox-close').click(function (e) {
    //                                 e.preventDefault();
    //                                 ib.close();
    //                             });
    //                         });
    //                     }
    //                 })(marker, i));
    //             }
    //             var options = {
    //                 imagePath: 'assets/images/icon/marker/location.png',
    //                 styles: clusterStyles,
    //                 minClusterSize: 2
    //             };
    //             markerCluster = new MarkerClusterer(map, allMarkers, options);
    //             google.maps.event.addDomListener(window, "resize", function () {
    //                 var center = map.getCenter();
    //                 google.maps.event.trigger(map, "resize");
    //                 map.setCenter(center);
    //             });
    //             $('.nextmap-nav').click(function (e) {
    //                 e.preventDefault();
    //                 map.setZoom(15);
    //                 var index = currentInfobox;
    //                 if (index + 1 < allMarkers.length) {
    //                     google.maps.event.trigger(allMarkers[index + 1], 'click');
    //                 } else {
    //                     google.maps.event.trigger(allMarkers[0], 'click');
    //                 }
    //             });
    //             $('.prevmap-nav').click(function (e) {
    //                 e.preventDefault();
    //                 map.setZoom(15);
    //                 if (typeof (currentInfobox) == "undefined") {
    //                     google.maps.event.trigger(allMarkers[allMarkers.length - 1], 'click');
    //                 } else {
    //                     var index = currentInfobox;
    //                     if (index - 1 < 0) {
    //                         google.maps.event.trigger(allMarkers[allMarkers.length - 1], 'click');
    //                     } else {
    //                         google.maps.event.trigger(allMarkers[index - 1], 'click');
    //                     }
    //                 }
    //             });
    //             $('.map-item').click(function (e) {
    //                 e.preventDefault();
    //                 map.setZoom(15);
    //                 var index = currentInfobox;
    //                 var marker_index = parseInt($(this).attr('href').split('#')[1], 10);
    //                 google.maps.event.trigger(allMarkers[marker_index], "click");
    //                 if ($(this).hasClass("scroll-top-map")) {
    //                     $('html, body').animate({
    //                         scrollTop: $(".map-container").offset().top + "-80px"
    //                     }, 500)
    //                 } else if ($(window).width() < 1064) {
    //                     $('html, body').animate({
    //                         scrollTop: $(".map-container").offset().top + "-80px"
    //                     }, 500)
    //                 }
    //             });
    //             // Scroll enabling button
    //             var scrollEnabling = $('.scrollContorl');
    //             $(scrollEnabling).click(function (e) {
    //                 e.preventDefault();
    //                 $(this).toggleClass("enabledsroll");
    //                 if ($(this).is(".enabledsroll")) {
    //                     map.setOptions({
    //                         'scrollwheel': true
    //                     });
    //                 } else {
    //                     map.setOptions({
    //                         'scrollwheel': false
    //                     });
    //                 }
    //             });
    //             var zoomControlDiv = document.createElement('div');
    //             var zoomControl = new ZoomControl(zoomControlDiv, map);

    //             function ZoomControl(controlDiv, map) {
    //                 zoomControlDiv.index = 1;
    //                 map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
    //                 controlDiv.style.padding = '5px';
    //                 var controlWrapper = document.createElement('div');
    //                 controlDiv.appendChild(controlWrapper);
    //                 var zoomInButton = document.createElement('div');
    //                 zoomInButton.className = "mapzoom-in";
    //                 controlWrapper.appendChild(zoomInButton);
    //                 var zoomOutButton = document.createElement('div');
    //                 zoomOutButton.className = "mapzoom-out";
    //                 controlWrapper.appendChild(zoomOutButton);
    //                 google.maps.event.addDomListener(zoomInButton, 'click', function () {
    //                     map.setZoom(map.getZoom() + 1);
    //                 });
    //                 google.maps.event.addDomListener(zoomOutButton, 'click', function () {
    //                     map.setZoom(map.getZoom() - 1);
    //                 });
    //             }
    //         }
    //         var map = document.getElementById('contact-map');
    //         if (typeof (map) != 'undefined' && map != null) {
    //             google.maps.event.addDomListener(window, 'load', contactMap);
    //         }
    //     }
    // });
})(this.jQuery);