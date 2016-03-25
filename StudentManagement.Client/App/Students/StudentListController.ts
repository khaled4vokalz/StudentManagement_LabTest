module App {
    export class StudentListController {
        students: Student[];
        loadingStudents: boolean;

        private studentService: StudentService;

        static $inject = ["StudentService"];
        constructor(studentService: StudentService) {
            this.students = [];
            this.studentService = studentService;
            this.loadingStudents = true;
            this.Get();
            console.log("Student Controller Constructor");
        }

        Get() {
            var self = this;

            var successCallback = result => {
                self.loadingStudents = false;
                self.students = result.data as Student[];
            };
            var errorCallback = error => {
                self.loadingStudents = false;
                console.log(error);
            };

            self.studentService.Get()
                .then(successCallback, errorCallback);
        }
    }

    angular.module('app').controller('StudentListController', StudentListController);
}