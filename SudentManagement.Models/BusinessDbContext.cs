﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SudentManagement.Models
{
    public class BusinessDbContext : DbContext
    {
        public BusinessDbContext() : base("name=DefaultConnection")
        {
            
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<City> Cities { get; set; }
    }
}
