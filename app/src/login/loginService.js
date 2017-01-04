'use strict';

angular.module('login')
    .service('loginService', function LoginService($http, apiBaseUrl) {
        var urlLogin = apiBaseUrl + '/login';

        this.login = function login(credentials) {
            return $http.post(urlLogin, credentials);
        };
    });
