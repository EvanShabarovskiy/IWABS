using Backend.Models.UIModels;
using Backend.Services;
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

        [HttpPost]
        public IActionResult AddPost(PostUI post)
        {
            return Ok(newsService.AddPost(post));
        }

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