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
        private InfoService infoService;

        public DocumentsController(InfoService infoService)
        {
            this.infoService = infoService;
        }

        [HttpGet]
        public IActionResult GetDocuments() => Ok(new { documents = infoService.GetDocuments() });
    }
}