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
        private UsersService usersService;

        public AuthController(AuthService authService, UsersService usersService)
        {
            this.usersService = usersService;
            this.authService = authService;
        }

        [HttpPost]
        public IActionResult Login(AdminUI adminUI)
        {
            if(adminUI != null)
            {
                Admin admin = usersService.GetAdmin(adminUI.Email, adminUI.Password);
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

            if (usersService.GetAdmin(id) != null) {
                return Ok();
            }
            return BadRequest();
        }
    }
}