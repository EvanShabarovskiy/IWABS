using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class InfoService
    {
        private IWABS_Context database;

        public InfoService(IWABS_Context database)
        {
            this.database = database;
        }

        public List<Medicine> GetMedicine() => database.Medicines.ToList();

        public List<Document> GetDocuments() => database.Documents.ToList();
    }
}
