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
    public class GalleryController : ControllerBase
    {
        private GalleryService galleryService;

        public GalleryController(GalleryService galleryService)
        {
            this.galleryService = galleryService;
        }

        [HttpGet]
        public IActionResult GetImages() => Ok(new { images = galleryService.GetImages() });

        [HttpPost]
        public IActionResult AddNewImage(ImageUI image, IFormFile file)
        {
            if (image.Title != null || file != null) {
                return Ok(new { addedImage = galleryService.AddNewImage(image, file) });
            }
            return BadRequest();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteImage(string id)
        {
            bool status = galleryService.DeleteImage(id);
            if(id != null && status)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}