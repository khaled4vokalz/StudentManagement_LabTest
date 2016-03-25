using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StudentManagement.Repository;
using StudentManagement.ViewModels;
using SudentManagement.Models;

namespace StudentManagement.Service
{
    public class StudentService : BaseService
    {
        private StudentRepository repository;
        public StudentService(BusinessDbContext db) : base(db)
        {
            this.repository = new StudentRepository(Db);
        }

        public List<StudentViewModel> GetAll()
        {
            IQueryable<Student> students = repository.GetAll();
            List<StudentViewModel> studentViewModels = students.ToList().Select(x => new StudentViewModel(x)).ToList();
            return studentViewModels;
        }

        public string Add(Student student)
        {
            if (!repository.ValidCity(student.City))
                throw new ArgumentException(""+student.City+" is not a valid City");
            if (string.IsNullOrWhiteSpace(student.Id))
            {
                student.Id = Guid.NewGuid().ToString();
            }
            return repository.Add(student);
        }

        public bool EmailExists(string email)
        {
            return repository.EmailExists(email);
        }
    }
}
