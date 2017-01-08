'use strict';

function ApplicationsController(appsService) {
    var self = this;

    self.apps = {};
    appsService.listApps()
        .then(function(data) {
            self.apps = data.data;
        });

}

angular.module('login')
    .controller('ApplicationsController', ['applicationsService', ApplicationsController]);
