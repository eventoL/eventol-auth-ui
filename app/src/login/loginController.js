'use strict';

function LoginController($location, store, loginService) {
    var self = this;

    self.user = {};
    self.login = function login() {
        loginService.login(self.user)
        .then(function(response) {
            var token = response.data.jwt;
            store.set('jwt', token);
            $location.path('/');
        }, function(error) {
            var errorMsg = error.data.message;
            self.msg = errorMsg;
        });
    };
}

angular.module('login')
    .controller('LoginController', ['$location', 'store', 'loginService', LoginController]);
