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
    public class MedicineController : ControllerBase
    {
        private MedicineService medicineService;

        public MedicineController(MedicineService medicineService)
        {
            this.medicineService = medicineService;
        }

        [HttpGet]
        public IActionResult GetMedicine() => Ok(new { medicine = medicineService.GetMedicine() });

        [HttpPost]
        public IActionResult AddNewMedicine(MedicineUI medicine)
        {
            if (medicine != null)
            {
                return Ok(new { medicine = medicineService.AddNewMedicine(medicine) });
            }
            return BadRequest();
        }

        [HttpPut]
        public IActionResult ChangeMedicine(Medicine medicine)
        {
            if (medicine != null)
            {
                Medicine result = medicineService.ChangeMedicine(medicine);
                if (result != null)
                {
                    return Ok(new { medicine = result });
                }
            }
            return BadRequest();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteMedicine(string id)
        {
            bool status = medicineService.DeleteMedicine(id);
            if (id != null && status != false)
            {
                Ok();
            }
            return BadRequest();
        }
    }
}