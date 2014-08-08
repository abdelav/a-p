'use strict';

/**
 * @ngdoc overview
 * @name skillFinderApp
 * @description
 * # skillFinderApp
 *
 * Main module of the application.
 */
angular
  .module('skillFinderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'ng-polymer-elements',
    'wu.masonry'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        resolve     : {
          CurrentUsr :['userSave','$q',function(userSave, $q) {
            var defer = $q.defer();
            userSave.getUsr().then(function(user){
                defer.resolve(user);
            });
            return defer.promise;
          }]
        }
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl'
      })
      .when('/interest', {
        templateUrl: 'views/interest.html',
        controller: 'InterestCtrl'
      })
      .when('/mates', {
        templateUrl: 'views/mates.html',
        controller: 'MatesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $location){
    $rootScope.$on('$routeChangeStart', function (){
      console.log($location.path());
      var currentLocation = $location.path();
      if(currentLocation !== '/'){
        $rootScope.showMenu = true;
      }else{
         $rootScope.showMenu = false;
      }
    });
  });
