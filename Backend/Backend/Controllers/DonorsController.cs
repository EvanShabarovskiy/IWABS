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
        public IActionResult AddNewDonor(DonorUI donor)
        {
            if (donor != null)
            {
                return Ok(new { donor = donorsService.AddNewDonor(donor) });
            }
            return BadRequest();
        }

        [HttpPut]
        public IActionResult ChangeDonor(Donor donor) {
            if (donor != null)
            {
                Donor result = donorsService.ChangeDonor(donor);
                if (result != null)
                {
                    Ok(new { donor = result });
                }
            }
            return BadRequest();
        }

        [HttpDelete]
        public IActionResult DeleteDonor(string id)
        {
            bool result = donorsService.DeleteDonor(id);
            if (id != null && result != false)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}