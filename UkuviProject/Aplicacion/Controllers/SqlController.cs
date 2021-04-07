using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class SqlController : Controller
    {
        // GET: Sql
        
        
        
        public ActionResult Index()
        {
            string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviTecEntities1"].ConnectionString;

            SqlConnection cnn = new SqlConnection(connectionString);

            cnn.Open();
            Response.Write("ConnectionMade");
            cnn.Close();

            return View();
        }
    }
}