using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }
        public DbSet<Request> Requests { get; set; }
        public DbSet<Urgency> Urgencies { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Progress> Progresses { get; set; }
    }
}