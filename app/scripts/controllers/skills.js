'use strict';

/**
 * @ngdoc function
 * @name skillFinderApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the skillFinderApp
 */
angular.module('skillFinderApp')
  .controller('SkillsCtrl', function ($scope) {
    $scope.Langs = [
        {name:'A# .NET'},
        {name:'ActionScript'},
        {name:'BASIC'},
        {name:'C'},
        {name:'C++'},
        {name:'Javascript'},
        {name:'Ruby'},
        {name:'NodeJS'},
        {name:'Java'},
        {name:'Cobol'},
        {name:'Python'},
        {name:'ASP .NET'},
        {name:'Curl'},
        {name:'ColdFusion'},
        {name:'Dart'},
        {name:'Swift'},
        {name:'Objective-C'},
        {name:'PHP'},
        {name:'PERL'},
        {name:'Groovy'},
        {name:'Pascal'},
        {name:'Backbone'},
        {name:'Underscore'},
        {name:'Unity3D'}
    ];

    $scope.$watch('Langs',function(){
        $scope.langs  = $scope.langs;
    });

    $scope.addSkill = function(lang){
        console.log(lang);
    };
  });
