'use strict';

/**
 * @ngdoc function
 * @name skillFinderApp.controller:MotherCtrl
 * @description
 * # MotherCtrl
 * Controller of the skillFinderApp
 */
angular.module('skillFinderApp')
  .controller('MotherCtrl', function ($scope, $rootScope, $cookieStore, $location, userSave){
    $scope.myStyle ={'visibility':'hidden'};
    $rootScope.showMenu = false;
    $scope.currentUsr   = {};

    $rootScope.$on('$routeChangeSuccess', function () {
      if ($location.path() !== '/') {
          $scope.myStyle ={'visibility':'visible'};
      }else{
          $scope.myStyle ={'visibility':'hidden'};
      }
      userSave.getUsr().then(function (user) {
        $scope.currentUsr = user;
      });
    });

    $scope.changeView = function(view){
      $location.path(view);
    };
  });
