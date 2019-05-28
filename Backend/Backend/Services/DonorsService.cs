using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class DonorsService
    {
        private IWABS_Context db;

        public DonorsService(IWABS_Context db)
        {
            this.db = db;
        }

        public List<Donor> GetDonors() => db.Donors.ToList();
    }
}
