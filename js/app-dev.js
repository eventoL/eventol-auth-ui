'use strict';
(function() {
    angular
        .module('protractor-example-dev', ['protractor-example', 'ngMockE2E'])
        .run(function($httpBackend, USER_API) {
            $httpBackend.whenGET(/js\/.*/).passThrough();
            $httpBackend.whenGET(/bower_components\/.*/).passThrough();

            $httpBackend
                .whenPOST(USER_API.URL + '/api/users', {
                    name    : 'Esteban',
                    lastName: 'Quito'
                })
                .respond(function() {
                    return [200, {
                        message: 'User created!'
                    }];
                });
            $httpBackend
                .whenPOST(USER_API.URL + '/api/users', {
                    name    : 'Esteban',
                    lastName: '123456789'
                })
                .respond(function() {
                    return [500, {
                        message: 'User can\'t have numbers as last name!'
                    }];
                });
        });

    if (angular.mock) {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['protractor-example-dev']);
        });
    }
})();
