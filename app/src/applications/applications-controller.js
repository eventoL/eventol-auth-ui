'use strict';

function ApplicationsController($mdToast, $state, $mdDialog, applicationsService) {
    var self = this;

    self.apps = {};
    self.app = {};

    self.listApps = function listApps() {
        return applicationsService.listApps()
            .then(function(data) {
                self.apps = data.data;
            });
    };

    self.appDetails = function appDetails(app) {
        self.app = app;
        $state.go('apps.details.settings');
    };

    self.editApp = function editApp() {
        return applicationsService.editApp(self.app)
            .then(function(data) {
                self.app = data.data;
                $mdToast.show(
                      $mdToast.simple()
                        .textContent('Successfully saved')
                        .hideDelay(3000)
                        .position('bottom right')
                    );
            })
            .catch(function(error) {
                $mdToast.show(
                      $mdToast.simple()
                        .textContent('An error occurred while saving. ' + error.data[0].message)
                        .hideDelay(3000)
                        .position('bottom right')
                        .toastClass('toast-error')
                    );
            });
    };

    self.deleteApp = function deleteApp(ev) {

        var confirm = $mdDialog.confirm()
            .title('Are you sure?')
            .textContent('Are you sure you want to delete your application? This process cannot be undone.')
            .ariaLabel('Delete application')
            .targetEvent(ev)
            .ok('I Agree')
            .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
            applicationsService.deleteApp(self.app._id)
                .then(function() {
                    self.listApps();
                    $state.go('apps.list');
                })
                .catch(function(error) {
                    $mdToast.show(
                          $mdToast.simple()
                            .textContent('An error occurred while deleting. ' + error.data[0].message)
                            .hideDelay(3000)
                            .position('bottom right')
                            .toastClass('toast-error')
                        );
                });
        });
    };

    self.openNewAppDialog = function openNewAppDialog(event) {
        self.msg = '';
        self.app = {};
        $mdDialog.show({
            controller: ApplicationsController,
            controllerAs: 'applicationsCtrl',
            contentElement: '#newAppForm',
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose: true
        });
    };

    self.addApp = function addApp() {
        return applicationsService.addApp(self.app)
            .then(function(data) {
                //Update app object from api
                self.app = data.data;
                $state.go('apps.details.settings');
            })
            .catch(function(error) {
                self.msg = error.statusText;
            });
    };

    self.listApps();
}

angular.module('login')
    .controller('ApplicationsController', ['$mdToast', '$state', '$mdDialog', 'applicationsService', ApplicationsController]);
