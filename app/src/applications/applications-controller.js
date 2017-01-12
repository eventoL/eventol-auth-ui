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
        self.app = app;
        $state.go('apps.appForm');
    };

    self.saveApp = function saveApp() {
        //If it has ID, is an edit
        if(self.app._id) {
            applicationsService.editApp(self.app)
                .then(function() {
                    self.listApps();
                    $state.go('apps.list');
                });
        } else {
            applicationsService.addApp(self.app)
                .then(function() {
                    self.listApps();
                    $state.go('apps.list');
                });
        }
        //Reset
        self.app = {};
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
