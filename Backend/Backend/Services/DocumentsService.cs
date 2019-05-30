using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class DocumentsService
    {
        private IWABS_Context database;

        public DocumentsService(IWABS_Context database)
        {
            this.database = database;
        }

        public List<Document> GetDocuments() => database.Documents.ToList();
    }
}
