﻿using Backend.Models;
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
        //public IHostingEnvironment env;

        public NewsService(IWABS_Context database)
        {
            this.database = database;
            //this.env = env;
        }

        public List<Post> GetNews()
        {
            List<Post> news = database.News.ToList();
            return news;
        }

        //public Post AddPost(Post post, IFormFile file)
        //{
        //    if (post != null)
        //    {
        //        post.Id = Guid.NewGuid().ToString();
        //        post.PublishingDate = DateTime.UtcNow.ToString("mm-dd-yyyy, HH:mm tt");
        //    }

        //    string folderName = "Static/Images";
        //    string webRootPath = env.ContentRootPath;
        //    string newPath = Path.Combine(webRootPath, folderName);

        //    if (!Directory.Exists(newPath))
        //    {
        //        Directory.CreateDirectory(newPath);
        //    }

        //    if (file != null)
        //    {
        //        string fileName = Guid.NewGuid().ToString() + ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
        //        string fullPath = Path.Combine(newPath, fileName);
        //        post.Image = fileName;
        //        using (var stream = new FileStream(fullPath, FileMode.Create))
        //        {
        //            file.CopyTo(stream);
        //        }
        //    }

        //    database.News.Add(post);
        //    database.SaveChanges();

        //    return post;
        //}

        public void DeletePost(string id)
        {
            Post post = database.News.FirstOrDefault(x => x.Id == id);

            if (post != null)
            {
                database.News.Remove(post);
                database.SaveChanges();
            }
        }
    }
}
