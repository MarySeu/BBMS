document.addEventListener('DOMContentLoaded', function() {
    let map;
    let service;
    let infowindow;

    function initMap() {
        const userLocation = { lat: 7.4789, lng: 4.5560 }; // Ile Ife coordinates

        map = new google.maps.Map(document.getElementById('map'), {
            center: userLocation,
            zoom: 15,
        });

        infowindow = new google.maps.InfoWindow();

        searchHospitals(userLocation);
    }

    function searchHospitals(location) {
        const request = {
            location: location,
            radius: '5000',
            type: ['hospital'],
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                displayHospitals(results);
                for (let i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            }
        });
    }

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }

    function displayHospitals(hospitals) {
        const hospitalList = document.getElementById('hospital-list');
        hospitalList.innerHTML = '<h2>Nearby Hospitals</h2><ul>';
        hospitals.forEach(function(hospital) {
            const li = document.createElement('li');
            li.textContent = hospital.name;
            hospitalList.querySelector('ul').appendChild(li);
        });
        hospitalList.innerHTML += '</ul>';
    }

    initMap();
});
