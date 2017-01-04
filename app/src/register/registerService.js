'use strict';

angular.module('register')
    .service('registerService', function RegisterService($http, apiBaseUrl) {
        var urlSingup = apiBaseUrl + '/signup';

        this.register = function register(user) {
            return $http.post(urlSingup, user);
        };
    });
