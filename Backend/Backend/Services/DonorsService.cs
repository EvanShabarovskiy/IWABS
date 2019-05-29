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
            if(donorUI != null)
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
            return null;
        }

        public Donor ChangeDonor(Donor donorUI)
        {
            if (donorUI != null) {
                Donor donor = database.Donors.FirstOrDefault(x => x.Id == donorUI.Id);
                database.Donors.Update(donor);
                database.SaveChanges();
                return donor;
            }
            return null;
        }

        public string DeleteDonor(string id)
        {
            Donor donor = database.Donors.FirstOrDefault(x => x.Id == id);

            if (donor != null)
            {
                database.Donors.Remove(donor);
                database.SaveChanges();
                return "Deleted";
            }
            return "Error";
        }
    }
}
