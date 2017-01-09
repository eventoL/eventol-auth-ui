'use strict';

function navigationController() {
    
}

angular.module('dogo')
    .component('navigation', {
        templateUrl: './src/components/navigation/navigation.html',
        controller: navigationController,
        controllerAs: 'navCtrl'
    });
