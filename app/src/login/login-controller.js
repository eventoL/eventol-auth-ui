'use strict';

function LoginController($state, authManagerService) {
    var self = this;

    self.user = {};
    self.login = function login() {
        authManagerService.login(self.user)
        .then(function() {
            $state.go('apps.list');
        })
        .catch(function(error) {
            self.msg = error.data.message;
        });
    };
}

angular.module('login')
    .controller('LoginController', ['$state', 'authManagerService', LoginController]);
