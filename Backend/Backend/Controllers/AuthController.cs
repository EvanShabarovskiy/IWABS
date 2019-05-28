using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Backend.Models;
using Backend.Models.UIModels;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private AuthService authService;
        private AdminService adminService;

        public AuthController(AuthService authService, AdminService adminService)
        {
            this.adminService = adminService;
            this.authService = authService;
        }

        [HttpPost]
        public IActionResult Login(AdminUI adminUI)
        {
            if(adminUI != null)
            {
                Admin admin = adminService.GetAdmin(adminUI.Email, adminUI.Password);
                if(admin != null)
                {
                    return Ok(new { token = authService.BuildToken(admin) });
                }
            }
            return BadRequest();
        }

        [Authorize]
        [HttpGet]
        public IActionResult SignedIn()
        {
            string id = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (adminService.GetAdmin(id) != null) {
                return Ok();
            }
            return BadRequest();
        }
    }
}