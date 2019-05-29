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
        public IActionResult AddNewMedicine(MedicineUI medicine) => Ok(new { donor = medicineService.AddNewMedicine(medicine) });

        [HttpPost]
        public IActionResult ChangeMedicine(Medicine medicine) => Ok(new { donor = medicineService.ChangeMedicine(medicine) });

        [HttpDelete]
        public IActionResult DeleteMedicine(string id) => Ok(new { status = medicineService.DeleteMedicine(id) });
    }
}