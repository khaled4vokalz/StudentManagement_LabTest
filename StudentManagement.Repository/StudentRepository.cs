using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SudentManagement.Models;

namespace StudentManagement.Repository
{
    public class StudentRepository : BaseRepository
    {
        public StudentRepository(BusinessDbContext db) : base(db)
        {
            
        }

        public IQueryable<Student> GetAll()
        {
            return Db.Students.AsQueryable();
        }

        public string Add(Student student)
        {
            Student addedStudent = Db.Students.Add(student);
            Db.SaveChanges();
            return addedStudent.Id;
        }

        public bool ValidCity(string city)
        {
            return Db.Cities.Any(x => x.Name == city.Trim().ToLower());
        }

        public bool EmailExists(string email)
        {
            return Db.Students.Any(x => x.Email == email);
        }
    }
}
