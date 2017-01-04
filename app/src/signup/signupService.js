'use strict';

angular.module('signup')
    .service('signupService', function SignupService($http, apiBaseUrl) {
        var urlSingup = apiBaseUrl + '/signup';

        this.signup = function signup(user) {
            return $http.post(urlSingup, user);
        };
    });
