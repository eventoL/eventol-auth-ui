'use strict';
angular.module('dogo')
    .config(function($mdThemingProvider, $routeProvider, $mdIconProvider) {
        $routeProvider.when('/', {
            templateUrl: 'src/home/home.html',
            controller: 'HomeController',
            controllerAs:'cntrl'
        })
        .when('/login', {
            templateUrl: 'src/login/login.html',
            controller: 'LoginController as cntrl',
            controllerAs:'cntrl'
        })
        .when('/register', {
            templateUrl: 'src/register/register.html',
            controller: 'RegisterController',
            controllerAs:'cntrl'
        });

        $mdIconProvider.iconSet('avatars', 'assets/angular-material-assets/icons//avatar-icons.svg', 128);
    });
