'use strict';

angular.module('login')
    .service('loginService', function loginService($http) {
        var urlLogin = 'http://localhost:3000/api/login';

        this.login = function login(credentials) {
            return $http.post(urlLogin, credentials);
        };
    });
