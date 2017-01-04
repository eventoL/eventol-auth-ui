'use strict';

function RegisterController($location, store, registerService) {
    var self = this;

    self.user = {};
    self.register = function register() {

        if(self.user.password !== self.user.passwordConfirm) {
            self.msg = 'Password and Confirmation do not match.';
            return;
        }

        registerService.register(self.user)
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


angular.module('register')
    .controller('RegisterController', ['$location', 'store', 'registerService', RegisterController]);
