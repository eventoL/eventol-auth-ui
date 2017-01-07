'use strict';
angular.module('dogo')
    .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider, $mdIconProvider) {

        $stateProvider.state('home', {
            url :'/',
            templateUrl: 'src/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl',
            data: {
                requiresLogin: true
            }
        })
        .state('login', {
            url:'/login',
            templateUrl: 'src/login/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
        })
        .state('signup', {
            url:'/signup',
            templateUrl: 'src/signup/signup.html',
            controller: 'SignupController',
            controllerAs: 'signupCtrl'
        });
        $urlRouterProvider.otherwise('/');

        $mdIconProvider.iconSet('avatars', 'assets/angular-material-assets/icons/avatar-icons.svg', 128);
    })
    .constant('apiBaseUrl', 'http://localhost:3000/api')
    .run(function($rootScope, $state, authManagerService) {
        $rootScope.$on('$stateChangeStart', function(e, to) {
            if (to.data && to.data.requiresLogin) {
                if (authManagerService.userLogged()) {
                    e.preventDefault();
                    $state.go('login');
                }
            }
        });
    });
