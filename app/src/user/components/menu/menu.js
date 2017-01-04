'use strict';

function MenuController(store, $location) {
    var self = this;
    self.logout = function logout() {
        store.remove('jwt');
        $location.path('/login');
    };
}

angular.module('dogo')
    .component('userMenu', {
        templateUrl: './src/user/components/menu/menu.html',
        controller:MenuController,
        controllerAs: 'menuCtrl'
    });
