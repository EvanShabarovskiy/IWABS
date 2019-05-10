using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class IWABS_Context : DbContext
    {
        public IWABS_Context(DbContextOptions<IWABS_Context> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Post> News { get; set; }
        public DbSet<Admin> Admins { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Admin>().HasData(
                new Admin[]
                {
                    new Admin { Id = Guid.NewGuid().ToString(), Login = "iwabs@gmail.com", Password = "admin" }
                }
            );
        }
    }
}
