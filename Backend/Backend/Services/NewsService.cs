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
    public class NewsService
    {
        private IWABS_Context database;
        public IHostingEnvironment env;

        public NewsService(IWABS_Context database, IHostingEnvironment env)
        {
            this.database = database;
            this.env = env;
        }

        public List<Post> GetNews() => database.News.OrderByDescending(x => x.PublishingDate).ToList();

        public Post AddPost(PostUI postUI, IFormFile file)
        {
            Post post = new Post();

            if (postUI != null)
            {
                post.Id = Guid.NewGuid().ToString();
                post.PublishingDate = DateTime.Now.ToString("dd-MM-yyyy, HH:mm");
                post.Title = postUI.Title;
                post.Text = postUI.Text;
            }

            string folderName = "Static/Images/News";
            string webRootPath = env.ContentRootPath;
            string newPath = Path.Combine(webRootPath, folderName);

            if (!Directory.Exists(newPath))
            {
                Directory.CreateDirectory(newPath);
            }

            if (file != null)
            {
                string fileName = Guid.NewGuid().ToString() + ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                string fullPath = Path.Combine(newPath, fileName);
                post.Image = fileName;
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
            }

            database.News.Add(post);
            database.SaveChanges();

            return post;
        }

        public void DeletePost(string id)
        {
            Post post = database.News.FirstOrDefault(x => x.Id == id);

            if (post != null)
            {
                string filePath = "Static/Images/News/" + post.Image;
                string webRootPath = env.ContentRootPath;
                string newPath = Path.Combine(webRootPath, filePath);
                if (File.Exists(newPath))
                {
                    File.Delete(newPath);
                }

                database.News.Remove(post);
                database.SaveChanges();
            }
        }
    }
}
