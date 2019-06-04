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
    public class GaleryController : ControllerBase
    {
        private GaleryService galeryService;

        public GaleryController(GaleryService galeryService)
        {
            this.galeryService = galeryService;
        }

        [HttpGet]
        public IActionResult GetImages() => Ok(new { images = galeryService.GetImages() });

        [HttpPost]
        public IActionResult AddNewImage(ImageUI image, IFormFile file)
        {
            if (image.Title != null || file != null) {
                return Ok(new { addedImage = galeryService.AddNewImage(image, file) });
            }
            return BadRequest();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteImage(string id)
        {
            bool status = galeryService.DeleteImage(id);
            if(id != null && status)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}