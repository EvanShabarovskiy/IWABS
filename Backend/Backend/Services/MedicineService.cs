using Backend.Models;
using Backend.Models.UIModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class MedicineService
    {
        private IWABS_Context database;

        public MedicineService(IWABS_Context database)
        {
            this.database = database;
        }

        public List<Medicine> GetMedicine() => database.Medicines.OrderByDescending(x => x.CreationDate).ToList();

        public Medicine AddNewMedicine(MedicineUI medicineUI)
        {
            Medicine medicine = new Medicine
            {
                Id = Guid.NewGuid().ToString(),
                Name = medicineUI.Name,
                Amount = medicineUI.Amount,
                ReleaseForm = medicineUI.ReleaseForm,
                CreationDate = DateTime.Now.ToString()
            };

            database.Medicines.Add(medicine);
            database.SaveChanges();
            return medicine;
        }

        public Medicine ChangeMedicine(Medicine medicineUI)
        {
            Medicine medicine = database.Medicines.FirstOrDefault(x => x.Id == medicineUI.Id);
            if (medicine != null) { 
                database.Medicines.Update(medicine);
                database.SaveChanges();
            }
            return medicine;
        }

        public bool DeleteMedicine(string id)
        {
            Medicine medicine = database.Medicines.FirstOrDefault(x => x.Id == id);

            if (medicine != null)
            {
                database.Medicines.Remove(medicine);
                database.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
