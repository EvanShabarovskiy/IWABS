using Backend.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class DocumentsService
    {
        private IWABS_Context database;
        public IHostingEnvironment env;

        public DocumentsService(IWABS_Context database)
        {
            this.database = database;
        }

        public List<Document> GetDocuments() => database.Documents.ToList();

        public Document AddNewDocument(string name, IFormFile document)
        {
            string[] format = document.ContentType.Split('/');

            Document doc = new Document
            {
                Id = Guid.NewGuid().ToString(),
                Title = name,
                Format = format[1]
            };

            string folderName = "Static/Documents";
            string webRootPath = env.ContentRootPath;
            string newPath = Path.Combine(webRootPath, folderName);

            if (!Directory.Exists(newPath))
            {
                Directory.CreateDirectory(newPath);
            }

            string fileName = Guid.NewGuid().ToString() + ContentDispositionHeaderValue.Parse(document.ContentDisposition).FileName.Trim('"');
            string fullPath = Path.Combine(newPath, fileName);
            doc.DocumentName = fileName;
            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                document.CopyTo(stream);
            }

            database.Documents.Add(doc);
            database.SaveChanges();

            return doc;
        } 

        public bool DeleteDocument(string id)
        {
            Document doc = database.Documents.FirstOrDefault(x => x.Id == id);

            if (doc != null)
            {
                string filePath = "Static/Documents/" + doc.DocumentName;
                string webRootPath = env.ContentRootPath;
                string newPath = Path.Combine(webRootPath, filePath);
                if (File.Exists(newPath))
                {
                    File.Delete(newPath);
                }

                database.Documents.Remove(doc);
                database.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
