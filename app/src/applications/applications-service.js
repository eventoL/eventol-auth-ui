'use strict';

angular.module('applications')
    .service('applicationsService', function ApplicationsService($http, apiBaseUrl) {
        var urlApps = apiBaseUrl + '/apps';

        this.listApps = function listApps() {
            return $http.get(urlApps);
        };

        this.addApp = function addApp(app) {
            if (typeof app.clientSecret === 'undefined' || app.clientSecret === null) {
                app.clientSecret = 'Algo';
            }
            return $http.post(urlApps, app);
        };

        this.editApp = function editApp(app) {
            return $http.put(urlApps + '/' + app._id, app);
        };

        this.deleteApp = function deleteApp(appId) {
            return $http.delete(urlApps + '/' + appId);
        };
    });
