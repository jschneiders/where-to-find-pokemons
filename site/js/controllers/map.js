angular.module("pokemons").controller("MapController", function($scope, $http, $stateParams, $state) {
  $scope.map = {
    center: {
      latitude: -31.7665293,
      longitude: -52.3377461
    },
    zoom: 14
  };
  
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(location) {
      // console.log(location.coords.accuracy);
      $scope.map = {
        center: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        },
        zoom: 14
      };
    });
  } else {
    alert('geolocalização não dísponível! ');
  }
  
  var events = {
    places_changed: function (searchBox) {
      var place = searchBox.getPlaces();
      if (!place || place == 'undefined' || place.length == 0) {
        alert('no place data :(');
        return;
      }
      $scope.map = {
        "center": {
          "latitude": place[0].geometry.location.lat(),
          "longitude": place[0].geometry.location.lng()
        },
        "zoom": 14
      };
    }
  };  
  
  $scope.searchbox = { 
    template: 'searchbox.tpl.html',
    events: events, 
    parentdiv:'searchBoxParent' 
  };
});
