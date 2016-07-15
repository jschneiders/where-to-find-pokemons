var app = angular.module('pokemons', ['ui.router']);

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
