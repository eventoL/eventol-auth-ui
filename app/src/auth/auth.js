'use strict';

angular.module('authManager', [])
    .service('authManagerService', function($http, store, jwtHelper, apiBaseUrl) {

        var urlLogin = apiBaseUrl + '/login';
        var urlSingup = apiBaseUrl + '/signup';

        this.signup = function signup(user) {
            return $http.post(urlSingup, user)
            .then(function(response) {
                var token = response.data.jwt;
                store.set('accessToken', token);
            });
        };

        this.login = function login(credentials) {
            return $http.post(urlLogin, credentials)
            .then(function(response) {
                var token = response.data.jwt;
                store.set('accessToken', token);
            });
        };

        this.userLogged = function userLogged() {
            return !store.get('accessToken') || jwtHelper.isTokenExpired(store.get('accessToken'));
        };

    });
