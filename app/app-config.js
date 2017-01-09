'use strict';
angular.module('dogo')
    .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider,
        $mdIconProvider, $httpProvider, jwtOptionsProvider) {

        $stateProvider.state('home', {
            url :'/',
            templateUrl: 'src/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl',
            data: {
                requiresLogin: true
            }
        })
        .state('apps', {
            parent: 'home',
            views: {
                'content':{
                    templateUrl: 'src/applications/applications.html',
                    controller: 'ApplicationsController',
                    controllerAs: 'applicationsCtrl',
                    data: {
                        requiresLogin: true
                    }
                }
            }
        })
        .state('apps.list', {
            views: {
                'apps': {
                    templateUrl: 'src/applications/applications-list.html'
                }
            }
        })
        .state('apps.appForm', {
            views: {
                'apps': {
                    templateUrl: 'src/applications/applications-edit.html'
                }
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

        jwtOptionsProvider.config({
            whiteListedDomains: ['localhost'],
            tokenGetter: function getToken() {
                return JSON.parse(localStorage.getItem('accessToken'));
            }
        });

        $httpProvider.interceptors.push('jwtInterceptor');
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
