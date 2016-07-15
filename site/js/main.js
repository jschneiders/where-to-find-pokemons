var app = angular.module('pokemons', ['ui.router', 'uiGmapgoogle-maps']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");
  
  $stateProvider
  .state('map', {
    url: "/",
    templateUrl: "site/partials/map.html"
  })  
  .state('add', {
    url: "/add",
    templateUrl: "site/partials/add.html", 
  }) 
}) 

.run(['$templateCache', function ($templateCache) {
  $templateCache.put('searchbox.tpl.html', '<input id="search" class="pac-controls" type="search" ng-model="ngModel" placeholder="Busque por um endereço">');
  $templateCache.put('window.tpl.html', '<div ng-controller="WindowCtrl" ng-init="showPlaceDetails(parameter)">{{place.name}}</div>');
}])

.controller('WindowCtrl', function ($scope) {
  $scope.place = {};
  $scope.showPlaceDetails = function(param) {
    $scope.place = param;
  }
});
