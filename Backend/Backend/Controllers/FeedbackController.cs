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
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private MailService mailService;

        public FeedbackController(MailService mailService)
        {
            this.mailService = mailService;
        }

        [HttpPost]
        public IActionResult SendFeedback(FeedbackUI feedback)
        {
            if (feedback != null) {
                mailService.SendMail(feedback);
                return Ok("Your feedback is sent");
            }
            return BadRequest();
        }
    }
}