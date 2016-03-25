namespace SudentManagement.Models.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<SudentManagement.Models.BusinessDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "SudentManagement.Models.BusinessDbContext";
        }

        protected override void Seed(SudentManagement.Models.BusinessDbContext context)
        {
            context.Cities.AddOrUpdate(
              p => p.Name,
              new City { Id = Guid.NewGuid().ToString(), Name = "Dhaka" },
              new City { Id = Guid.NewGuid().ToString(), Name = "Comilla" },
              new City { Id = Guid.NewGuid().ToString(), Name = "Sylhet" },
              new City { Id = Guid.NewGuid().ToString(), Name = "Chittagong" },
              new City { Id = Guid.NewGuid().ToString(), Name = "Barishal" },
              new City { Id = Guid.NewGuid().ToString(), Name = "Khulna" }
            );

        }
    }
}
