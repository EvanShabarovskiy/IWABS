using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private NewsService newsService;

        public NewsController(NewsService newsService)
        {
            this.newsService = newsService;
        }

        [HttpGet]
        public IActionResult GetNews()
        {
            return Ok(new { news = newsService.GetNews() });
        }

        //[HttpPost]
        //public IActionResult AddPost(Post post, IFormFile file)
        //{
        //    return Ok(newsService.AddPost(post, file));
        //}

        //[Authorize]
        [HttpDelete("{id}")]
        public IActionResult DeletePost(string id)
        {
            if (id != null) {
                newsService.DeletePost(id);
                return Ok();
            }
            return BadRequest();
        }
    }
}