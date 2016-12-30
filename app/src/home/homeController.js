'use strict';


angular.module('home', [])
    .controller('HomeController', function($scope, $mdSidenav, $mdUtil) {

        function buildToggler(navID) {
            var debounceFn = $mdUtil.debounce(function() {
                $mdSidenav(navID)
                    .toggle();
            }, 100);
            return debounceFn;
        }

        $scope.toggleLeft = buildToggler('left');
    });
