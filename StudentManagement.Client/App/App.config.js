var App;
(function (App) {
    var AppConfig = (function () {
        function AppConfig($stateProvider, $urlRouterProvider) {
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
        AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
        return AppConfig;
    }());
    App.AppConfig = AppConfig;
    angular.module("app", ["ngResource", "ui.router"]);
    angular.module("app").config(AppConfig);
})(App || (App = {}));
