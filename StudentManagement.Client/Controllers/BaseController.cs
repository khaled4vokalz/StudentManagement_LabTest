using System.Web.Http;
using SudentManagement.Models;

namespace StudentManagement.Client.Controllers
{
    public class BaseController : ApiController
    {
        protected BusinessDbContext Db;
        public BaseController()
        {
            this.Db = new BusinessDbContext();
        }
    }
}