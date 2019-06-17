using Backend.Models.UIModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Medicine : MedicineUI
    {
        public string Id { get; set; }
        public string CreatingDate { get; set; }
    }
}
