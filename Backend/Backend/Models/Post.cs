using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Post
    {
        public string Id { get; set; }
        public string PublishingDate { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public string Image { get; set; }
    }

}
