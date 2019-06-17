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
        public DbSet<Image> Images { get; set; }

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
                    new Post { Id = Guid.NewGuid().ToString(), Image="first-image.jpg", PublishingDate=DateTime.Now.ToString("dd-MM-yyyy, HH:mm"), Title="Вірші Тараса Шевченка про Україну", Text="Тарас Шевченко прожив 47 років: з них пробув 24 роки в кріпацтві, 10 – на засланні, а решту – під наглядом жандармів. Загалом на Батьківщині він був нечастим гостем… Але де б він не перебував – він завжди залишався сином своєї землі, пам’ятав її і сумував за нею, як за матір’ю. Саме тому Україна стала у творчості Шевченка головним образом, овіяним любов’ю і тугою. Саме такою, далекою та недоступною, постає образ України у вірші “Думи мої думи…”." },
                    new Post { Id = Guid.NewGuid().ToString(), Image="second-image.jpeg", PublishingDate=DateTime.Now.ToString("dd-MM-yyyy, HH:mm"), Title="Про донорство крові в Фінляндії", Text="Міністерство охорони здоров'я Фінляндії занепокоєно ситуацією з донорством крові в країні, оскільки кількість донацій з 2011 по 2016 роки знижується в середньому на 10-13% кожного року. З приводу цього організація Червоного Хреста вже підготувала низку заходів, щоб заохотити громадян здавати кров частіше. Як зазначає голова фінського Червоного Хреста, жінок серед донорів крові більше, ніж чоловіків на 23%. В 2016 році в Фінляндії було зібрано 204 503 пакетів цільної крові, проте цей показник має тенденцію до спаду."},
                    new Post { Id = Guid.NewGuid().ToString(), Image="three-image.jpg", PublishingDate=DateTime.Now.ToString("dd-MM-yyyy, HH:mm"), Title="Ніхто не має права вимагати у пацієнта шукати донорів", Text="Питаннями пошуку донорів крові має займатись центр крові чи станція переливання, і ніхто не може вимагати від пацієнта самостійно шукати собі донора. Про це в інтерв’ю Радіо Свобода розповіла президент Асоціації молодих донорів України Ірина Славінська. За її словами, через недосконалість системи служби крові 40% заготовленого матеріалу просто знищується. На думку Славінської, проблему «пошуку донорів» може вирішити елементарна співпраця працівників центру крові з громадськими організаціями та волонтерами, систематична популяризація добровільного безоплатного донорства та налагоджена логістика між медичними закладами різного підпорядкування." },
                    new Post { Id = Guid.NewGuid().ToString(), Image="four-image.jpg", PublishingDate=DateTime.Now.ToString("dd-MM-yyyy, HH:mm"), Title="Як заохочують донорів здавати кров у різних країнах", Text="14 червня – Всесвітній день донора крові. За статистикою, один донор крові може врятувати життя трьох людей. Проте існує лише кілька десятків країн, де донорська кров забезпечує 100% потреби, необхідної для населення. В Україні показники донорства крові невисокі. За словами експертів, серед головних чинників такої ситуації – недовіра до лікарень, відсутність належної техніки, а також менталітет. В Україні не допомагає залученню до донорства навіть оплата за здачу крові і два вихідних. Цікаво, що в багатьох країнах світу стати донором – це звичайна справа." }
                }
            );

            builder.Entity<Donor>().HasData(
               new Donor[]
               {
                    new Donor { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Name="Тарасюк Петро Сергійович", Email="fredfre123@gmail.com", Address="12/4, вул.Соборна, Рівне", BloodDonated="3.4", BloodGroup="I+", DateOfBirth="23-03-1995" },
                    new Donor { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Name="Мартинюк Людмила Миколаївна", Email="jess.liud@gmail.com", Address="34a, вул.Дубунська, Рівне", BloodDonated="2.7", BloodGroup="IV-", DateOfBirth="02-07-1998" },
                    new Donor { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Name="Прокопчук Сергій Вікторович", Email="sergiy.pro@gmail.com", Address="12, вул.Тараса Шевченка, Харків", BloodDonated="4.3", BloodGroup="I-", DateOfBirth="12-05-1990" },
                    new Donor { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Name="Вдрабадан Іван Григорович", Email="chekunia@gmail.com", Address="27/12, вул.Незалежності, Луцьк", BloodDonated="1.0", BloodGroup="III-", DateOfBirth="22-12-1994" },
                    new Donor { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Name="Мирончук Андрій Петрович", Email="miron3322@gmail.com", Address="8, вул.Степана Петлюри, Львів", BloodDonated="1.2", BloodGroup="II+", DateOfBirth="13-01-1997" },
               }
            );

            builder.Entity<Medicine>().HasData(
              new Medicine[]
              {
                    new Medicine { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Name="Аміаку розчин 10%", Amount="14", ReleaseForm="10%-40мл", Unit="фл" },
                    new Medicine { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Name="Бинт", Amount="202", ReleaseForm="Бинт марлевий медичний 7*14", Unit="шт"},
                    new Medicine { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Name="Бланідас Актив", Amount="10", ReleaseForm="1000 мл", Unit="шт" },
                    new Medicine { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Name="Дезіфекційний засіб", Amount="10", ReleaseForm="Еконорм ДЕЗ Антисептик", Unit="шт" },
                    new Medicine { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Name="Набір", Amount="45", ReleaseForm="Витратні матеріали для атоматичного плазмаферезу", Unit="набір" },
              }
            );

            builder.Entity<Document>().HasData(
              new Document[]
              {
                    new Document { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Title="Додаток до річного плану зі змінами за квітень 2019 року", DocumentName="first-doc.pdf", Format="pdf" },
                    new Document { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Title="Річний план зі змінами травень 2019 року", DocumentName="second-doc.pdf", Format="pdf" },
                    new Document { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Title="Додаток до річного плану зі змінами за січень 2019 року", DocumentName="three-doc.docx", Format="docx" },
                    new Document { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Title="Додаток до річного плану зі змінами за березень 2019 року", DocumentName="four-doc.docx", Format="docx" },
                    new Document { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Title="Додаток до річного плану за грудень 2018 року", DocumentName="five-doc.txt", Format="txt" },
              }
            );

            builder.Entity<Image>().HasData(
             new Image[]
             {
                    new Image { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Title="Заголовок до першого фото", ImageName="first-image.jpg" },
                    new Image { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Title="Заголовок до другого фото", ImageName="second-image.jpg" },
                    new Image { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Title="Заголовок до третього фото", ImageName="three-image.jpg" },
                    new Image { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Title="Заголовок до четвертого фото", ImageName="four-image.jpg" },
                    new Image { Id = Guid.NewGuid().ToString(), CreationDate = DateTime.Now.ToString(), Title="Заголовок до п'ятого фото", ImageName="five-image.jpg" },
             }
           );
        }
    }
}
