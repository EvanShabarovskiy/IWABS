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
    public class AuthController : ControllerBase
    {
        private IWABS_Context db;
        private AuthService authService;

        public AuthController(IWABS_Context db, AuthService authService)
        {
            this.db = db;
            this.authService = authService;
        }

        public IActionResult Login(AdminUI adminUI)
        {
            if(adminUI != null)
            {
                Admin admin = db.Admins.Single(x => x.Login == adminUI.Login && x.Password == adminUI.Password);

                if(admin != null)
                {
                    return Ok(authService.BuildToken(admin));
                }
            }

            return BadRequest();
        }
    }
}