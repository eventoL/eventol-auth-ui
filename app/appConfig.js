'use strict';
angular.module('dogo')
    .config(function($mdThemingProvider, $routeProvider, $mdIconProvider) {
        $routeProvider.when('/', {
            templateUrl: 'src/home/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: 'src/login/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
        })
        .when('/signup', {
            templateUrl: 'src/signup/signup.html',
            controller: 'SignupController',
            controllerAs: 'signupCtrl'
        });

        $mdIconProvider.iconSet('avatars', 'assets/angular-material-assets/icons/avatar-icons.svg', 128);
    })
    .constant('apiBaseUrl', 'http://localhost:3000/api');
