'use strict';

/**
 * @ngdoc directive
 * @name skillFinderApp.directive:randomW
 * @description
 * # randomW
 */
angular.module('skillFinderApp')
  .directive('randomW', function ($window, $timeout){
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs){
        element.css('background','#'+Math.floor(Math.random()*16777215).toString(16));
        var mainMargins = $window.outerWidth * 0.95;
        var resizeBricks;
        $timeout(function(){
          resizeBricks(mainMargins);

            angular.element(window).resize(function() {
                mainMargins = $window.outerWidth * 0.95;
                resizeBricks(mainMargins);
            });

            element.find('.skill-true').hide();

            element.on('click', function(){
                if(!angular.element(this).find('.skill-true').hasClass('ihave')){
                    angular.element(this).find('.skill-true').show().addClass('ihave');
                }else{
                    angular.element(this).find('.skill-true').hide().removeClass('ihave');
                }
            });
        },0);

          resizeBricks = function(mm){
            var columWidth;
            if (mainMargins > 1200) {
                columWidth = (mm - (30 * 10)) / 10;
                //TODO: take off margin of the last index elements
                console.log(attrs.index);
                element.width(columWidth);
            }else if(mainMargins < 1200 && mm > 700) {
                columWidth = (mm - (30 * 4)) / 4;
                element.width(columWidth);
            }else{
                columWidth = (mm - (30 * 2)) / 2;
                element.width(columWidth);
            }
        };
      }
    };
  });
