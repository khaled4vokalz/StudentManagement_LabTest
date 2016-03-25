module App {
    export class AppConfig {
        private stateProvider: angular.ui.IStateProvider;
        private urlProvider: angular.ui.IUrlRouterProvider;

        static $inject = ['$stateProvider','$urlRouterProvider'];
        constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
            this.stateProvider = $stateProvider;
            this.urlProvider = $urlRouterProvider;
            console.log("I am in appconfig.ts file");
            $stateProvider
                .state('root', {
                    abstract: true,
                    url: "",
                    template: '<div ui-view class=\"container-fluid slide\"></div>'
                })
                .state('root.students', {
                    url: "/",
                    templateUrl: "partials/students/students.tpl.html",
                    controller: "StudentListController",
                    controllerAs: "vm"
                })
                .state('root.add-student', {
                    url: "/addstudent",
                    templateUrl: "partials/students/add-student.tpl.html",
                    controller: "StudentController",
                    controllerAs: "vm"
                });
        }
    }

    angular.module("app", ["ngResource", "ui.router"]);
    angular.module("app").config(AppConfig);
} 