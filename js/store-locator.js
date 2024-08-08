/* const mapStyle = [{
        "stylers": [{
                "hue": "#ff1a00"
            },
            {
                "invert_lightness": true
            },
            {
                "saturation": -100
            },
            {
                "lightness": 33
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#2D333C"
        }]
    }
]; */
/* const mapStyle = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]; */
var jsonMapData;
var infowindow;
var marker, i, map;
var bounds;
var markersArray = [];

function initMap() {
    var jqxhr = $.getJSON("./stores.json", function (data) {
        jsonMapData = data;
    });
   /*  var jqxhr = $.getJSON("./stores.json", function (data) {
        jsonMapData = data;
    });
    //console.log(jqxhr);
    jqxhr.done(function () {
        map = new google.maps.Map(document.getElementById('temp5-map'), {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 1,
            fullscreenControl: false,
            //styles: mapStyle
        });
        infowindow = new google.maps.InfoWindow();
        infowindow.setOptions({
            pixelOffset: new google.maps.Size(0, 0),
            maxWidth: 300
        });
        bounds = new google.maps.LatLngBounds();
        var image = "img/map-icon.png";
        $.each(jsonMapData, function (key, val) {
            var image = "img/" + val.location_icon;
            // if (val.location_group == "one") {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(val.location_lat, val.location_long),
                    map: map,
                    icon: image,
                    optimized: false
                });
                markersArray.push(marker);
                if (val.location_name !== "") {
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                            var name = val.location_name;
                        var description = val.description;
                        var phone = val.phone;
                        var fax = val.fax;
                        var email = val.email;
                        var website = val.website;
                        var category = val.category;
                        var position = val.position;
                        const content = '<div class="mapContent"><h2 id="firstHeading" class="mapContentHead">'+name+'</h2><div id="bodyContent" class="mapContentTxt"><p>'+description+'</p><div class="mapItemArea"><div class="mapItem" style="display:'+(phone == "" ? "none" : "block")+'"><div class="mapLabel">Call</div><div class="mapField"><a href="tel:'+phone+'">'+phone+'</a></div></div><div class="mapItem" style="display:'+(fax == "" ? "none" : "block")+'"><div class="mapLabel">Fax</div><div class="mapField"><a href="fax:'+fax+'">'+fax+'</a></div></div><div class="mapItem" style="display:'+(email == "" ? "none" : "block")+'"><div class="mapLabel">Email</div><div class="mapField">'+email+'</div></div><div class="mapItem" style="display: '+(website == "" ? "none" : "block")+'"><div class="mapLabel">Web</div><div class="mapField">'+website+'</div></div></div></div></div>';
                        infowindow.setContent(content);
                        infowindow.open(map, this);
                        };
                    })(marker, i));
                }
                bounds.extend(marker.getPosition());
                map.fitBounds(bounds);
                map.setZoom(13);
                google.maps.event.addListener(map, 'click', function () {
                    infowindow.close();
                });
            // }
        });
    }); */
}

function show_location(location_id) {
    for (var i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
    }
    map = new google.maps.Map(document.getElementById('temp5-map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 1,
        fullscreenControl: false,
        //styles: mapStyle
    });
    infowindow = new google.maps.InfoWindow();
    infowindow.setOptions({
        pixelOffset: new google.maps.Size(0, 0),
        maxWidth: 300
    });
    bounds = new google.maps.LatLngBounds();
    $.each(jsonMapData, function (key, val) {
        var image = "img/" + val.location_icon;
        if (location_id === false) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(val.location_lat, val.location_long),
                map: map,
                icon: image,
                optimized: false
            });
            markersArray.push(marker);
            if (val.location_name !== "") {
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        var name = val.location_name;
                        var description = val.description;
                        /* var phone = val.phone;
                        var fax = val.fax;
                        var email = val.email;
                        var website = val.website; */
                        var category = val.category;
                        var position = val.position;
                        const content = '<div class="mapContent"><h2 id="firstHeading" class="mapContentHead">'+name+'</h2><div id="bodyContent" class="mapContentTxt"><p>'+description+'</p></div></div>';
                        infowindow.setContent(content);
                        infowindow.open(map, this);
                    };
                })(marker, i));
            }
            bounds.extend(marker.getPosition());
            map.fitBounds(bounds);
            map.setZoom(13);
            google.maps.event.addListener(map, 'click', function () {
                infowindow.close();
            });
        } else if (location_id === val.location_id) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(val.location_lat, val.location_long),
                map: map,
                icon: image,
                optimized: false
            });
            markersArray.push(marker);
            if (val.location_name !== "") {
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        var name = val.location_name;
                        var description = val.description;
                        /* var phone = val.phone;
                        var fax = val.fax;
                        var email = val.email;
                        var website = val.website; */
                        var category = val.category;
                        var position = val.position;
                        const content = '<div class="mapContent"><h2 id="firstHeading" class="mapContentHead">'+name+'</h2><div id="bodyContent" class="mapContentTxt"><p>'+description+'</p></div></div>';
                        infowindow.setContent(content);
                        infowindow.open(map, this);
                    };
                })(marker, i));
            }
            bounds.extend(marker.getPosition());
            map.fitBounds(bounds);
            if (val.location_id) {
                bounds.extend(marker.getPosition());
                map.fitBounds(bounds);
                map.setZoom(13);
                // map.setZoom(15);
            } 
            else {
                bounds.extend(marker.getPosition());
                map.fitBounds(bounds);
                map.setZoom(13);
            }
            google.maps.event.addListener(map, 'click', function () {
                infowindow.close();
            });
        }
    });
}

function show_location_group() {
    var location_group;
    var match_cnt=0;
    for (var i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
    }
    map = new google.maps.Map(document.getElementById('temp5-map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 1,
        fullscreenControl: false,
        //styles: mapStyle
    });
    infowindow = new google.maps.InfoWindow();
    infowindow.setOptions({
        pixelOffset: new google.maps.Size(0, 0),
        maxWidth: 300
    });
    bounds = new google.maps.LatLngBounds();
    // if($('#pinCode').val()!="" && $.isNumeric($('#pinCode').val())){
    if($('#pinCode').val()!="" && $('#pinCode').val()){
        location_group = $('#pinCode').val();
        for (var i = 0; i < markersArray.length; i++) {
            markersArray[i].setMap(null);
        }
        bounds = new google.maps.LatLngBounds();
        $(".temp5-storeListInner").html('');
        $.each(jsonMapData, function (key, val) {
            var image = "img/" + val.location_icon;
            if (location_group === false) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(val.location_lat, val.location_long),
                    map: map,
                    icon: image,
                    optimized: false
                });
                markersArray.push(marker);
                if (val.location_name !== "") {
                    $(".temp5-storeListInner").append('<div class="temp5-item" onclick="show_location(\''+val.location_id+'\');"><h5>'+val.location_name+'</h5><ul><li><div class="temp5-icon"><img src="img/icon-location.svg" alt=""></div><div class="temp5-iconRight"><p class="store-distance">13.12 km from your location</p></div></li><li><div class="temp5-icon"><img src="img/icon-address.svg" alt=""></div><div class="temp5-iconRight"><h6>Address</h6><p>'+val.description+'</p><a href="javascript:void(0)" class="btnPrimary viewInMap">VIEW IN MAP ></a></div></li></ul></div>');
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                            var name = val.location_name;
                            var description = val.description;
                            /* var phone = val.phone;
                            var fax = val.fax;
                            var email = val.email;
                            var website = val.website; */
                            var category = val.category;
                            var position = val.position;
                            const content = '<div class="mapContent"><h2 id="firstHeading" class="mapContentHead">'+name+'</h2><div id="bodyContent" class="mapContentTxt"><p>'+description+'</p></div></div>';
                            infowindow.setContent(content);
                            infowindow.open(map, this);
                        };
                    })(marker, i));
                }
                bounds.extend(marker.getPosition());
                map.fitBounds(bounds);
                map.setZoom(13);
                google.maps.event.addListener(map, 'click', function () {
                    infowindow.close();
                });
            } else if (location_group === val.location_group) {
                match_cnt = 1;
                $(".temp5-storeListInner").append('<div class="temp5-item" onclick="show_location(\''+val.location_id+'\');"><h5>'+val.location_name+'</h5><ul><li><div class="temp5-icon"><img src="img/icon-location.svg" alt=""></div><div class="temp5-iconRight"><p class="store-distance">13.12 km from your location</p></div></li><li><div class="temp5-icon"><img src="img/icon-address.svg" alt=""></div><div class="temp5-iconRight"><h6>Address</h6><p>'+val.description+'</p><a href="javascript:void(0)" class="btnPrimary viewInMap">VIEW IN MAP ></a></div></li></ul></div>');
                $('.temp5-storeList').jScrollPane({
                    resizeSensor: true,
                    resizeSensorDelay: 0,
                    autoReinitialise: true,
                });
                $('.temp5-item').on('click', function () {
                    $('.temp5-item.temp5-itemActive').removeClass('temp5-itemActive');
                    $(this).addClass('temp5-itemActive');
                });

                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(val.location_lat, val.location_long),
                    map: map,
                    icon: image,
                    optimized: false
                });
                markersArray.push(marker);
                if (val.location_name !== "") {
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                            var name = val.location_name;
                            var description = val.description;
                            /* var phone = val.phone;
                            var fax = val.fax;
                            var email = val.email;
                            var website = val.website; */
                            var category = val.category;
                            var position = val.position;
                            const content = '<div class="mapContent"><h2 id="firstHeading" class="mapContentHead">'+name+'</h2><div id="bodyContent" class="mapContentTxt"><p>'+description+'</p></div></div>';
                            infowindow.setContent(content);
                            infowindow.open(map, this);
                        };
                    })(marker, i));
                }
                bounds.extend(marker.getPosition());
                map.fitBounds(bounds);
                if (val.location_group) {
                    bounds.extend(marker.getPosition());
                    map.fitBounds(bounds);
                    // map.setZoom(13);
                    // map.setZoom(15);
                } 
                else {
                    bounds.extend(marker.getPosition());
                    map.fitBounds(bounds);
                    // map.setZoom(13);
                }
                google.maps.event.addListener(map, 'click', function () {
                    infowindow.close();
                });
            }
        });
        if(match_cnt==0){
            $(".temp5-storeListInner").append('<div class="temp5-noItem">No data found.</div>');
            $('.temp5-storeList').jScrollPane({
                resizeSensor: true,
                resizeSensorDelay: 0,
                autoReinitialise: true,
            });
        }
    }else{
        $(".temp5-storeListInner").html('').append('<div class="temp5-noItem">Please enter valid pincode.</div>');
        $('.temp5-storeList').jScrollPane({
            resizeSensor: true,
            resizeSensorDelay: 0,
            autoReinitialise: true,
        });
    }
}
