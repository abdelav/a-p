'use strict';

/**
 * @ngdoc service
 * @name skillFinderApp.api
 * @description
 * # api
 * Factory in the skillFinderApp.
 */
angular.module('skillFinderApp')
  .factory('api', function ($http,$q) {

  var url =  '../../api/post.json';

  return {
    getInstaStream : function(){
          var defer = $q.defer();
          $http.get(url).success(function(data){
              console.log(data);
              defer.resolve(data);
          });
          return defer.promise;
      }
    };
  });
