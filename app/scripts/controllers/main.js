'use strict';

/**
 * @ngdoc function
 * @name skillFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skillFinderApp
 */
angular.module('skillFinderApp')
  .controller('MainCtrl', function ($scope, $location, $firebaseSimpleLogin, FIREBURL, userSave, $cookieStore){
    var ref = new Firebase(FIREBURL);
    $scope.loginObj = $firebaseSimpleLogin(ref);

    $scope.login = function(){
      $scope.loginObj.$login('facebook', {
        rememberMe: true,
        scope: 'email,user_likes,user_birthday,user_education_history,user_work_history,user_interests,user_location,user_friends'
      }).then(function(user){
        $cookieStore.put('userIdSkillF',user.thirdPartyUserData.id);
        ref.child('users/'+user.id).once('value',function(dataSnapshot){
          if(dataSnapshot.val() === null){
            userSave.saveUser(user.thirdPartyUserData);
          }
        });
        $location.path('/dashboard');
      }, function(error) {
        console.error('Login failed: ', error);
      });
    };
  });
