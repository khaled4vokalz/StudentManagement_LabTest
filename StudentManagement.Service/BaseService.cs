using SudentManagement.Models;

namespace StudentManagement.Service
{
    public class BaseService
    {
        protected BaseService(BusinessDbContext db)
        {
            this.Db = db;
        }

        protected BusinessDbContext Db;
    }
}