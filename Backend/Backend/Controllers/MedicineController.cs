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
    public class MedicineController : ControllerBase
    {
        private InfoService infoService;

        public MedicineController(InfoService infoService)
        {
            this.infoService = infoService;
        }

        [HttpGet]
        public IActionResult GetMedicine() => Ok(new { medicine = infoService.GetMedicine() });
    }
}