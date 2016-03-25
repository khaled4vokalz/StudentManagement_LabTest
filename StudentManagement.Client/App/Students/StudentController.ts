module App {
    export class StudentController {
        Student: Student;
        phoneRegEx: string;
        emailValid: boolean;
        cityValid: boolean;
        submitted: boolean;

        private studentService: StudentService;

        static $inject = ['StudentService'];
        constructor(studentService: StudentService) {
            this.Student = new Student();
            this.studentService = studentService;
            this.phoneRegEx = "^[0-9]{11}$";
            this.emailValid = true;
            this.cityValid = true;
            console.log("Student Controller Constructor");
        }

        SaveIfValidated() {
            var self = this;
            self.submitted = true;
            self.emailValid = true;
            self.cityValid = true;
            var successCallback = result => {
                self.emailValid = result.data;
                if (self.emailValid)
                {
                    self.SaveStudent();
                }
            };
            var errorCallback = error => {
                console.log(error);
            };

            self.studentService.EmailExists(self.Student.Email)
                .then(successCallback, errorCallback);
        }

        SaveStudent() {
            var self = this;
            var successCallback = result => {
                if (result.data.validated) {
                    self.Student = new Student();
                    self.submitted = false;
                    alert('Student successfully saved');
                }
                else {
                    self.cityValid = false;
                }
            };
            var errorCallback = error => {
                console.log(error);
            };

            self.studentService.Save(self.Student)
                .then(successCallback, errorCallback);
        }
    }
    angular.module('app').controller('StudentController', StudentController);
}