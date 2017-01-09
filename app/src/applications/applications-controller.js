'use strict';

function ApplicationsController($mdToast, appsService) {
    var self = this;

    self.apps = {};

    self.listApps = function listApps() {
        appsService.listApps()
            .then(function(data) {
                self.apps = data.data;
            });
    };

    self.editApp = function editApp() {};
    self.deleteApp = function deleteApp(app) {
        appsService.deleteApp(app._id)
            .then(function() {
                $mdToast.show(
                      $mdToast.simple()
                        .textContent('Successfully erased')
                        .hideDelay(3000)
                    );
                self.listApps();
            });
    };

    self.listApps();
}

angular.module('login')
    .controller('ApplicationsController', ['$mdToast', 'applicationsService', ApplicationsController]);
