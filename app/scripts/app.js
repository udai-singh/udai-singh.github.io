'use strict';

var myApp = angular.module('myApp', []);

  myApp.controller('MainController', function($scope, $http){

    $scope.message = "Hello World"; 
  });
