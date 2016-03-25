using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using StudentManagement.Service;
using StudentManagement.ViewModels;
using SudentManagement.Models;

namespace StudentManagement.Client.Controllers
{
    public class StudentController : BaseController
    {
        private StudentService service;

        public StudentController()
        {
            service = new StudentService(Db);
        }
        
        public IHttpActionResult Post(Student student)
        {
            try
            {
                string result = service.Add(student);
                return Ok(new { validated = true, returnMessage = result });
            }
            catch (ArgumentException e)
            {
                return Ok(new { validated = false, returnMessage = e.Message });
            }
            catch (Exception ex) {
                return Content(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        
        public IHttpActionResult Get()
        {
            List<StudentViewModel> studentList = service.GetAll();
            return Ok(studentList);
        }

        [HttpGet]
        public IHttpActionResult EmailExists(string email)
        {
            bool emailExists = service.EmailExists(email);
            return Ok(!emailExists);
        }
    }
}
