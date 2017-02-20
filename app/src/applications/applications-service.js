'use strict';

angular.module('applications')
    .service('applicationsService', function ApplicationsService($http, apiBaseUrl) {
        var urlApps = apiBaseUrl + '/apps';

        this.listApps = function listApps() {
            return $http.get(urlApps);
        };

        this.getApp = function getApp(appId) {
            return $http.get(urlApps + '/' + appId);
        };

        this.addApp = function addApp(app) {
            return $http.post(urlApps, app);
        };

        this.editApp = function editApp(app) {
            return $http.put(urlApps + '/' + app._id, app);
        };

        this.deleteApp = function deleteApp(appId) {
            return $http.delete(urlApps + '/' + appId);
        };

        this.listAppUsers = function listAppUsers(appId) {
            return $http.get(urlApps + '/' + appId + '/appusers');
        };
    });
