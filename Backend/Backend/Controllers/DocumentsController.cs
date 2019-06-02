using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
        public IActionResult AddNewDocument(string name, IFormFile file)
        {
            if (name != null && file != null)
            {
                return Ok(new { createdDoc = documentsService.AddNewDocument(name, file) });
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