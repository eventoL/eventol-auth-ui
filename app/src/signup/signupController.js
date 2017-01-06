'use strict';

function SignupController($state, authManagerService) {
    var self = this;

    self.user = {};
    self.signup = function signup() {

        if(self.user.password !== self.user.passwordConfirm) {
            self.msg = 'Password and Confirmation do not match.';
            return;
        }

        authManagerService.signup(self.user)
        .then(function() {
            $state.go('home');
        })
        .catch(function(error) {
            self.msg = error.data.message;
        });
    };
}


angular.module('signup')
    .controller('SignupController', ['$state', 'authManagerService', SignupController]);
