'use strict';
angular.module('dogo')
    .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider, $mdIconProvider) {
        // $locationProvider.html5Mode(true);

        $stateProvider.state('home', {
            url :'/',
            templateUrl: 'src/home/home.html',
            controller: 'HomeController'
        })
        .state('login', {
            url:'/login',
            templateUrl: 'src/login/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl',
            noLoginRequired: true
        })
        .state('signup', {
            url:'/signup',
            templateUrl: 'src/signup/signup.html',
            controller: 'SignupController',
            controllerAs: 'signupCtrl',
            noLoginRequired: true
        });
        $urlRouterProvider.otherwise('/');

        $mdIconProvider.iconSet('avatars', 'assets/angular-material-assets/icons/avatar-icons.svg', 128);
    })
    .constant('apiBaseUrl', 'http://localhost:3000/api');
