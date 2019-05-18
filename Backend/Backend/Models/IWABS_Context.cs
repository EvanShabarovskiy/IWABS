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

        public DbSet<Donor> Donors { get; set; }
        public DbSet<Post> News { get; set; }
        public DbSet<Admin> Admins { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Admin>().HasData(
                new Admin[]
                {
                    new Admin { Id = Guid.NewGuid().ToString(), Email = "iwabs@gmail.com", Password = "admin" }
                }
            );

            builder.Entity<Post>().HasData(
                new Post[]
                {
                    new Post { Id = Guid.NewGuid().ToString(), Image="first-image.jpg", PublishingDate="21.21.2021", Title="First Post", Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
                    new Post { Id = Guid.NewGuid().ToString(), Image="second-image.jpg", PublishingDate="22.22.2021", Title="Second Post", Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." }
                }
            );
        }
    }
}
