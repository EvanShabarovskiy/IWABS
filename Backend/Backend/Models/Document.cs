using Backend.Models.UIModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Document : DocumentUI
    {
        public string Id { get; set; }
        public string DocumentName { get; set; }
        public string Format { get; set; }
        public string CreationDate { get; set; }
    }
}
