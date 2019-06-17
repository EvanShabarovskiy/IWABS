using Backend.Models.UIModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Image : ImageUI
    {
        public string Id { get; set; }
        public string ImageName { get; set; }
        public string CreationDate { get; set; }
    }
}
