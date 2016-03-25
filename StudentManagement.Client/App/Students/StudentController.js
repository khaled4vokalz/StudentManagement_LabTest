var App;
(function (App) {
    var StudentController = (function () {
        function StudentController(studentService) {
            this.Student = new App.Student();
            this.studentService = studentService;
            this.phoneRegEx = "^[0-9]{11}$";
            this.emailValid = true;
            this.cityValid = true;
            console.log("Student Controller Constructor");
        }
        StudentController.prototype.SaveIfValidated = function () {
            var self = this;
            self.submitted = true;
            self.emailValid = true;
            self.cityValid = true;
            var successCallback = function (result) {
                self.emailValid = result.data;
                if (self.emailValid) {
                    self.SaveStudent();
                }
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.studentService.EmailExists(self.Student.Email)
                .then(successCallback, errorCallback);
        };
        StudentController.prototype.SaveStudent = function () {
            var self = this;
            var successCallback = function (result) {
                if (result.data.validated) {
                    self.Student = new App.Student();
                    self.submitted = false;
                    alert('Student successfully saved');
                }
                else {
                    self.cityValid = false;
                }
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.studentService.Save(self.Student)
                .then(successCallback, errorCallback);
        };
        StudentController.$inject = ['StudentService'];
        return StudentController;
    }());
    App.StudentController = StudentController;
    angular.module('app').controller('StudentController', StudentController);
})(App || (App = {}));
