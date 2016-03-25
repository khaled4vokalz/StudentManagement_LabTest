module App {
    "use strict";

    export class StudentService {

        private httpService: angular.IHttpService;
        private qService: angular.IQService;

        static $inject: string[] = ["$http", "$q"];
        constructor(private $http: angular.IHttpService, private $q: angular.IQService) {
            this.httpService = $http;
            this.qService = $q;
        }

        Save(data: Student): angular.IPromise<any> {
            var self = this;
            var deffered = this.qService.defer();

            var successCallback = result => {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = error => {
                console.log(error);
                return deffered.reject(error);
            };

            self.httpService.post("/api/student", data)
                .then(successCallback, errorCallback);
            return deffered.promise;
        }

        Get() {
            var self = this;
            var deffered = this.qService.defer();

            var successCallback = result => {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = error => {
                console.log(error);
                return deffered.reject(error);
            };

            self.httpService.get("/api/student")
                .then(successCallback, errorCallback);
            return deffered.promise;
        }

        EmailExists(email: string) : angular.IPromise<any> {
            var self = this;
            var deffered = this.qService.defer();

            var successCallback = result => {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = error => {
                console.log(error);
                return deffered.reject(error);
            };

            self.httpService.get("/api/student?email=" + email)
                .then(successCallback, errorCallback);
            return deffered.promise;
        }
    }

    angular.module("app").service("StudentService", StudentService);
}