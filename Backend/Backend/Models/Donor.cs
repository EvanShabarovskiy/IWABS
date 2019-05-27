using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Donor
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public float BloodDonated { get; set; }
        public string BloodGroup { get; set; }
        public string DateOfBirth { get; set; }
        public string Adress { get; set; }
       }

}
