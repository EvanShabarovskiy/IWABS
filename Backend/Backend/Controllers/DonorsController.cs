using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Backend.Models.UIModels;
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

        [HttpPost]
        public IActionResult AddNewDonor(DonorUI donor) => Ok(new { donor = donorsService.AddNewDonor(donor) });

        [HttpPost]
        public IActionResult ChangeDonor(Donor donor) => Ok(new { donor = donorsService.ChangeDonor(donor) });

        [HttpDelete]
        public IActionResult DeleteDonor(string id) => Ok(new { status = donorsService.DeleteDonor(id) });
    }
}