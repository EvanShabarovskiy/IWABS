using Backend.Models;
using Backend.Models.UIModels;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class GaleryService
    {
        private IWABS_Context database;
        private IHostingEnvironment env;

        public GaleryService(IWABS_Context database, IHostingEnvironment env)
        {
            this.database = database;
            this.env = env;
        }

        public List<Image> GetImages() => database.Images.ToList();
        
        public Image AddNewImage(ImageUI imageUI, IFormFile file)
        {
            string folderName = "Static/Images/Galery";
            string webRootPath = env.ContentRootPath;
            string newPath = Path.Combine(webRootPath, folderName);

            if (!Directory.Exists(newPath))
            {
                Directory.CreateDirectory(newPath);
            }

            string fileName = Guid.NewGuid().ToString() + ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
            string fullPath = Path.Combine(newPath, fileName);
            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                file.CopyTo(stream);
            }

            Image image = new Image
            {
                Id = Guid.NewGuid().ToString(),
                Title = imageUI.Title,
                ImageName = fileName
            };

            database.Images.Add(image);
            database.SaveChanges();

            return image;
        }

        public bool DeleteImage(string id)
        {
            Image image = database.Images.FirstOrDefault(x => x.Id == id);
            if(image != null)
            {
                string filePath = "Static/Images/Galery/" + image.ImageName;
                string webRootPath = env.ContentRootPath;
                string newPath = Path.Combine(webRootPath, filePath);
                if (File.Exists(newPath))
                {
                    File.Delete(newPath);
                }
                database.Images.Remove(image);
                database.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
