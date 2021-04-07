using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Web.Mvc;
using WebApplication1.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Core.EntityClient;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
           
            
            return View();
            
        }
        public ActionResult Details()
        {
            List<LandingPage> lps = new List<LandingPage>();
            string temp ="";
            string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;



            SqlConnection cnn = new SqlConnection(connectionString);
            if (lps.Count > 0)
            {
                lps.Clear();
            }
            cnn.Open();

            SqlCommand cmd = new SqlCommand("SELECT * FROM LandingPage");
            cmd.CommandType = System.Data.CommandType.Text;
            cmd.Connection = cnn;
            Response.Write("ConnectionMade");

            SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                lps.Add(new LandingPage() { ID_Page = int.Parse(reader["ID_Page"].ToString()),
                Dominio_Page = reader["Dominio_Page"].ToString(),
                Plantilla = int.Parse(reader["Plantilla"].ToString()),
                Titulo_Profesional = reader["Titulo_Profesional"].ToString(),
                Imagen = int.Parse(reader["Imagen"].ToString()),
                Mensaje_1= reader["Mensaje_1"].ToString(),
                Mensaje_2 = reader["Mensaje_2"].ToString(),
                });

            }
            

            cnn.Close();
            
            return View(lps);

        }
        private void FetchData()
        {
            try
            {
                
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}