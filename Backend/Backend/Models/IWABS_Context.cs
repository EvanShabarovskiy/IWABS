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
        public DbSet<Medicine> Medicines { get; set; }
        public DbSet<Document> Documents { get; set; }

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
                    new Post { Id = Guid.NewGuid().ToString(), Image="first-image.jpg", PublishingDate="21-21-2021, 07:35", Title="First Post", Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
                    new Post { Id = Guid.NewGuid().ToString(), Image="second-image.jpg", PublishingDate="22-22-2021, 12:45", Title="Second Post", Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
                    new Post { Id = Guid.NewGuid().ToString(), Image="second-image.jpg", PublishingDate="22-22-2021, 12:45", Title="Second Post", Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
                    new Post { Id = Guid.NewGuid().ToString(), Image="second-image.jpg", PublishingDate="22-22-2021, 12:45", Title="Second Post", Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
                    new Post { Id = Guid.NewGuid().ToString(), Image="second-image.jpg", PublishingDate="22-22-2021, 12:45", Title="Second Post", Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
                    new Post { Id = Guid.NewGuid().ToString(), Image="second-image.jpg", PublishingDate="22-22-2021, 12:45", Title="Second Post", Text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." }

                }
            );

            builder.Entity<Donor>().HasData(
               new Donor[]
               {
                    new Donor { Id = Guid.NewGuid().ToString(), Name="Frederick Berch", Email="fred123@gmail.com", Adress="12/4, Soborna.st, Rivne", BloodDonated=3.42f, BloodGroup="I+", DateOfBirth="23-03-1995" },
                    new Donor { Id = Guid.NewGuid().ToString(), Name="Jesica Millson", Email="jessjess@gmail.com", Adress="34a, Molodizhna.st, Bichal", BloodDonated=2.78f, BloodGroup="IV-", DateOfBirth="02-07-1998" },
               }
            );

            builder.Entity<Medicine>().HasData(
              new Medicine[]
              {
                    new Medicine { Id = Guid.NewGuid().ToString(), Name="Маріхуана медицинська", Amount=999, Price=200f },
                    new Medicine { Id = Guid.NewGuid().ToString(), Name="Анал гин", Amount=69, Price=13.70f },
                    new Medicine { Id = Guid.NewGuid().ToString(), Name="Парацетамол эптить", Amount=45, Price=15.50f },
              }
            );

            builder.Entity<Document>().HasData(
              new Document[]
              {
                    new Document { Id = Guid.NewGuid().ToString(), Title="Мотивація", DocumentName="first-document.txt" },
                    new Document { Id = Guid.NewGuid().ToString(), Title="Вміння Дмитра", DocumentName="second-document.txt" },
              }
            );
        }
    }
}
