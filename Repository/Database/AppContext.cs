using Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Database
{
    public class AppContext : DbContext
    {
        public DbSet<Hospital> Hospitais;
    }
}
