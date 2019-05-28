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
    public class DonorsController : ControllerBase
    {
        private DonorsService donorsService;

        public DonorsController(DonorsService donorsService)
        {
            this.donorsService = donorsService;
        }

        [HttpGet]
        public IActionResult GetDonors() => Ok(new { donors = donorsService.GetDonors() });
        
    }
}