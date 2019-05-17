using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class NewsService
    {
        private IWABS_Context db;

        public NewsService(IWABS_Context db)
        {
            this.db = db;
        }

        public List<Post> GetNews()
        {
            List<Post> news = db.News.ToList();
            return news;
        }
    }
}
