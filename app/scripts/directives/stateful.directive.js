// (function (define){
// 	'use strict';

// 	define([], function (){
// 		return function (){
// 			return {
// 				restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
// 				link: function(scope, element, attrs) {
// 					element.bind('click', function (){
// 						scope.$apply(function (){
// 							if (!element.hasClass(attrs.stateful)) {
// 								element.addClass(attrs.stateful);
// 							}else{
// 								element.removeClass(attrs.stateful);
// 							};
// 						});
// 					});
// 				}
// 			}
// 		};
// 	});
// })(this.define);

(function (define) {
    'use strict';
    define([
    ], function () {
        return function () {
            return {
                restrict: 'A', // only matches attribute name
                link: function link(scope, element, attrs) {
                    element.bind('click', function () {
                        scope.$apply(function () {
                            if (!element.hasClass(attrs.nsStateful)) {
                                element.addClass(attrs.nsStateful);
                            } else {
                                element.removeClass(attrs.nsStateful);
                            }
                        });
                    });
                }
            };    
        };
    });
}(this.define));