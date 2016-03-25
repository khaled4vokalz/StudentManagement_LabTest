using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SudentManagement.Models;

namespace StudentManagement.ViewModels
{
    public class StudentViewModel
    {
        public StudentViewModel(Student student)
        {
            this.Id = student.Id;
            this.Name = student.Name;
            this.Phone = student.Phone;
            this.Email = student.Email;
            this.City = student.City;
            this.Address = student.Address;
        }
        public string Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
    }
}
