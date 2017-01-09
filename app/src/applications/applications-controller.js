'use strict';

function ApplicationsController($mdToast, $state, applicationsService) {
    var self = this;

    self.apps = {};
    self.app = {};

    self.listApps = function listApps() {
        applicationsService.listApps()
            .then(function(data) {
                self.apps = data.data;
            });
    };

    self.editApp = function editApp(app) {
        //TODO: Send app to other state
        $state.go('home.appForm');
    };

    self.saveApp = function saveApp() {
        //If it has ID, is an edit
        if(self.app._id) {
            applicationsService.editApp(self.app)
                .then(function() {
                    self.listApps();
                    $state.go('home.apps');
                });
        } else {
            applicationsService.addApp(self.app)
                .then(function() {
                    self.listApps();
                    $state.go('home.apps');
                });
        }
    };

    self.deleteApp = function deleteApp(app) {
        applicationsService.deleteApp(app._id)
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
    .controller('ApplicationsController', ['$mdToast', '$state', 'applicationsService', ApplicationsController]);
