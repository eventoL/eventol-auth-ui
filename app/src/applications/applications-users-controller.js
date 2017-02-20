'use strict';

function ApplicationUsersController($stateParams, applicationsService) {
    var self = this;
    self.app = {};

    self.listUsers = function listUsers() {
        return applicationsService.listAppUsers($stateParams.appId)
            .then(function(data) {
                self.app.users = data.data;
            });
    };

    self.listUsers();
}

angular.module('applications')
    .controller('ApplicationUsersController', ['$stateParams', 'applicationsService', ApplicationUsersController]);
