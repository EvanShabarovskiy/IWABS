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

        public List<Medicine> GetMedicine() => database.Medicines.ToList();

        public Medicine AddNewMedicine(MedicineUI medicineUI)
        {
            if (medicineUI != null)
            {
                Medicine medicine = new Medicine
                {
                    Id = Guid.NewGuid().ToString(),
                    Name = medicineUI.Name,
                    Amount = medicineUI.Amount,
                    Price = medicineUI.Price
                };

                database.Medicines.Add(medicine);
                database.SaveChanges();
                return medicine;
            }
            return null;
        }

        public Medicine ChangeMedicine(Medicine medicineUI)
        {
            if (medicineUI != null)
            {
                Medicine medicine = database.Medicines.FirstOrDefault(x => x.Id == medicineUI.Id);
                database.Medicines.Update(medicine);
                database.SaveChanges();
                return medicine;
            }
            return null;
        }

        public string DeleteMedicine(string id)
        {
            Medicine medicine = database.Medicines.FirstOrDefault(x => x.Id == id);

            if (medicine != null)
            {
                database.Medicines.Remove(medicine);
                database.SaveChanges();
                return "Deleted";
            }
            return "Error";
        }
    }
}
