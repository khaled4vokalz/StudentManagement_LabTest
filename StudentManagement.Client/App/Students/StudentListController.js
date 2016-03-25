var App;
(function (App) {
    var StudentListController = (function () {
        function StudentListController(studentService) {
            this.students = [];
            this.studentService = studentService;
            this.loadingStudents = true;
            this.Get();
            console.log("Student Controller Constructor");
        }
        StudentListController.prototype.Get = function () {
            var self = this;
            var successCallback = function (result) {
                self.loadingStudents = false;
                self.students = result.data;
            };
            var errorCallback = function (error) {
                self.loadingStudents = false;
                console.log(error);
            };
            self.studentService.Get()
                .then(successCallback, errorCallback);
        };
        StudentListController.$inject = ["StudentService"];
        return StudentListController;
    }());
    App.StudentListController = StudentListController;
    angular.module('app').controller('StudentListController', StudentListController);
})(App || (App = {}));
