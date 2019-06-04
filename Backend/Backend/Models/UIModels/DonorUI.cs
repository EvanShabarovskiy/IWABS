using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models.UIModels
{
    public class DonorUI
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string BloodDonated { get; set; }
        public string BloodGroup { get; set; }
        public string DateOfBirth { get; set; }
        public string Adress { get; set; }
    }
}
