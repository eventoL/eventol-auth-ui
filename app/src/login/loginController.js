'use strict';

angular.module('login')
    .controller('LoginController', function LoginController($scope, $location, store, loginService) {
        $scope.login = function login() {
            var credentials = $scope.$ctrl.form;

            loginService.login(credentials)
                .then(function(response) {
                    var token = response.data.jwt;
                    store.set('jwt', token);
                    $location.path('/');
                }, function(error) {
                    var errorMsg = error.data.message;
                    $scope.$ctrl.msg = errorMsg;
                });
        };
    });
