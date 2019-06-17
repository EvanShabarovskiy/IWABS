using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models.UIModels;
using Backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    public class DocumentsController : ControllerBase
    {
        private DocumentsService documentsService;

        public DocumentsController(DocumentsService documentsService)
        {
            this.documentsService = documentsService;
        }

        [HttpGet]
        public IActionResult GetDocuments() => Ok(new { documents = documentsService.GetDocuments() });

        [HttpPost]
        public IActionResult AddNewDocument(DocumentUI document, IFormFile file)
        {
            if (document.Title != null && file != null)
            {
                return Ok(new { createdDoc = documentsService.AddNewDocument(document, file) });
            }
            return BadRequest();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteDocument(string id)
        {
            bool status = documentsService.DeleteDocument(id);
            if(id != null && status != false)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}