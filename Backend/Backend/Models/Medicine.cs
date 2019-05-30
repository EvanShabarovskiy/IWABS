using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Medicine
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Amount { get; set; }
        public string ReleaseForm { get; set; }
        public string Unit { get; set; }
    }
}
