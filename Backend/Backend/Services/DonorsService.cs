using Backend.Models;
using Backend.Models.UIModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class DonorsService
    {
        private IWABS_Context database;

        public DonorsService(IWABS_Context database)
        {
            this.database = database;
        }

        public List<Donor> GetDonors() => database.Donors.ToList();

        public Donor AddNewDonor(DonorUI donorUI)
        {
            Donor donor = new Donor{
                Id = Guid.NewGuid().ToString(),
                DateOfBirth = donorUI.DateOfBirth,
                Email = donorUI.Email,
                Name = donorUI.Name,
                Adress = donorUI.Adress,
                BloodDonated = donorUI.BloodDonated,
                BloodGroup = donorUI.BloodGroup,
            };

            database.Donors.Add(donor);
            database.SaveChanges();
            return donor;
        }

        public Donor ChangeDonor(Donor donorUI)
        {
            Donor donor = database.Donors.FirstOrDefault(x => x.Id == donorUI.Id);
            if (donor != null)
            {
                database.Donors.Update(donor);
                database.SaveChanges();
            }
            return donor;
        }

        public bool DeleteDonor(string id)
        {
            Donor donor = database.Donors.FirstOrDefault(x => x.Id == id);

            if (donor != null)
            {
                database.Donors.Remove(donor);
                database.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
