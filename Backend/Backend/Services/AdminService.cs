using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class AdminService
    {
        private IWABS_Context db;

        public AdminService(IWABS_Context db)
        {
            this.db = db;
        }

        public Admin GetAdmin(string email, string password) => db.Admins.SingleOrDefault(x => x.Email == email && x.Password == password);

        public Admin GetAdmin(string id) => db.Admins.SingleOrDefault(x => x.Id == id);
    }
}
