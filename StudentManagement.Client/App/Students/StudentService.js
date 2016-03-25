var App;
(function (App) {
    "use strict";
    var StudentService = (function () {
        function StudentService($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.httpService = $http;
            this.qService = $q;
        }
        StudentService.prototype.Save = function (data) {
            var self = this;
            var deffered = this.qService.defer();
            var successCallback = function (result) {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = function (error) {
                console.log(error);
                return deffered.reject(error);
            };
            self.httpService.post("/api/student", data)
                .then(successCallback, errorCallback);
            return deffered.promise;
        };
        StudentService.prototype.Get = function () {
            var self = this;
            var deffered = this.qService.defer();
            var successCallback = function (result) {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = function (error) {
                console.log(error);
                return deffered.reject(error);
            };
            self.httpService.get("/api/student")
                .then(successCallback, errorCallback);
            return deffered.promise;
        };
        StudentService.prototype.EmailExists = function (email) {
            var self = this;
            var deffered = this.qService.defer();
            var successCallback = function (result) {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = function (error) {
                console.log(error);
                return deffered.reject(error);
            };
            self.httpService.get("/api/student?email=" + email)
                .then(successCallback, errorCallback);
            return deffered.promise;
        };
        StudentService.$inject = ["$http", "$q"];
        return StudentService;
    }());
    App.StudentService = StudentService;
    angular.module("app").service("StudentService", StudentService);
})(App || (App = {}));
