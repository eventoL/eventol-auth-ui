'use strict';

function ApplicationRolesController($stateParams, $mdDialog, $state, applicationsService) {
    var self = this;
    self.app = {};

    function saveRoles() {
        return applicationsService.editApp(self.app)
                .then(function(data) {
                    //Update app object from api
                    self.app = data.data;
                    $mdDialog.hide();
                    $state.go('apps.details.roles');
                })
                .catch(function(error) {
                    self.msg = error.statusText;
                });
    }

    self.listRoles = function listRoles() {
        return applicationsService.getApp($stateParams.appId)
            .then(function(data) {
                self.app = data.data;
            });
    };

    self.openRoleDialog = function openRoleDialog(event) {
        self.msg = '';
        $mdDialog.show({
            controller: ApplicationRolesController,
            controllerAs: 'applicationRolesCtrl',
            contentElement: '#newRoleForm',
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose: true
        });
    };

    self.addRole = function addRole() {
        self.newRole = {};
        self.openRoleDialog();
    };

    self.editRole = function editRole(roleIndex) {
        self.newRole = self.app.roles.splice(roleIndex, 1)[0];
        self.openRoleDialog();
    };

    self.removeRole = function removeRole(roleIndex) {
        var confirm = $mdDialog.confirm()
            .title('Are you sure?')
            .textContent('Are you sure you want to delete the role? \
                All users that already have this role will loose it.')
            .ariaLabel('Delete role')
            .ok('I Agree')
            .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
            self.app.roles.splice(roleIndex, 1);
            saveRoles();
        });
    };


    self.saveRole = function saveRole() {
        self.app.roles.push(self.newRole);
        saveRoles();
    };

    self.listRoles();
}

angular.module('applications')
    .controller('ApplicationRolesController', [
        '$stateParams',
        '$mdDialog',
        '$state',
        'applicationsService',
        ApplicationRolesController
    ]);
