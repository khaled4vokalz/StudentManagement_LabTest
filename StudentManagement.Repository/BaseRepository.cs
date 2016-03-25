using SudentManagement.Models;

namespace StudentManagement.Repository
{
    public class BaseRepository
    {
        protected BusinessDbContext Db;
        protected BaseRepository(BusinessDbContext db)
        {
            this.Db = db;
        }
    }
}