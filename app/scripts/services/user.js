'use strict';
/* jshint camelcase: false*/
/**
 * @ngdoc service
 * @name skillFinderApp.user
 * @description
 * # user
 * Factory in the skillFinderApp.
 */
angular.module('skillFinderApp')
  .factory('userSave', function (FIREBURL,$cookieStore,$q) {
        var ref = new Firebase(FIREBURL);
        var usersRef = ref.child('users');
    return {
      saveUser : function(usr){
        usersRef.child(usr.id).set({
          id          : usr.id,
          displayName : usr.name,
          firstName   : usr.first_name,
          lastName    : usr.last_name,
          birthday    : usr.birthday,
          email       : usr.email,
          gender      : usr.gender,
          timezone    : usr.timezone,
          location    : usr.location.name,
          picture     : 'https://graph.facebook.com/'+usr.id+'/picture?type=large&width=800'
        });
      },

      getUsr : function(){
        var currentUsr = $cookieStore.get('userIdSkillF');
        var defer      = $q.defer();
        usersRef.child(currentUsr).once('value',function(userSnapshot){
            defer.resolve(userSnapshot.val());
        });
        return defer.promise;
      }
    };
  });
