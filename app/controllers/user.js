'use strict';
(function() {
    angular.module('protractor-example')
        .controller('AppCtrl', function(USER_API, $http) {
            var self = this;
            this.user = {};
            this.error = {};
            this.success = {};

            this.createUser = function() {
                $http
                    .post(USER_API.URL + '/api/users', self.user)
                    .then(function success(response) {
                        self.error = {};
                        self.success.message = response.data.message;
                    }, function error(response) {
                        self.success = {};
                        self.error.message = response.data.message;
                    });
            };
        });
})();
