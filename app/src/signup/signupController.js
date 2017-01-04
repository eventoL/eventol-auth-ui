'use strict';

function SignupController($location, store, signupService) {
    var self = this;

    self.user = {};
    self.signup = function signup() {

        if(self.user.password !== self.user.passwordConfirm) {
            self.msg = 'Password and Confirmation do not match.';
            return;
        }

        signupService.signup(self.user)
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


angular.module('signup')
    .controller('SignupController', ['$location', 'store', 'signupService', SignupController]);
