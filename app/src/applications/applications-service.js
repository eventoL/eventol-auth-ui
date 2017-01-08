'use strict';

angular.module('applications')
    .service('applicationsService', function ApplicationsService($http, apiBaseUrl) {
        var urlApps = apiBaseUrl + '/apps';

        this.listApp = function listApp() {
            return $http.get(urlApps);
        };

        this.addApp = function addApp() {

        };

        this.editApp = function editApp() {

        };

        this.deleteApp = function deleteApp() {

        };
    });
