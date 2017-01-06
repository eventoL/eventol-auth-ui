'use strict';

function MenuController(store, $state) {
    var self = this;
    self.logout = function logout() {
        store.remove('jwt');
        $state.go('login');
    };
}

angular.module('dogo')
    .component('userMenu', {
        templateUrl: './src/user/components/menu/menu.html',
        controller: MenuController,
        controllerAs: 'menuCtrl'
    });
