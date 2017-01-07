'use strict';

function MenuController($state, authManagerService) {
    var self = this;
    self.logout = function logout() {
        authManagerService.logout();
        $state.go('login');
    };
}

angular.module('dogo')
    .component('userMenu', {
        templateUrl: './src/user/components/menu/menu.html',
        controller: MenuController,
        controllerAs: 'menuCtrl'
    });
