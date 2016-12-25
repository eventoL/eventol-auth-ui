'use strict';

(function() {
    if (!angular.mock) {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['protractor-example']);
        });
    }
    angular.module('protractor-example', []);
})();
