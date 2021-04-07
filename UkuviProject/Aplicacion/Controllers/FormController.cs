using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Diagnostics;
using System.Data.SqlClient;
using System.Web.Mvc;

using System.Data;

namespace WebApplication1.Controllers
{
    public class FormController : Controller
    {
        // GET: Form
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public void FormFour(Models.LandingPage formData)
        {
            try
            {
                string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                SqlConnection cnn = new SqlConnection(connectionString);
                SqlCommand com = new SqlCommand("createLandingPage", cnn);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@uidpage", formData.ID_Page);
                com.Parameters.AddWithValue("@udominiopage", formData.Dominio_Page);
                com.Parameters.AddWithValue("@uplantilla", formData.Plantilla);
                com.Parameters.AddWithValue("@uimagen", formData.Imagen);
                com.Parameters.AddWithValue("@utituloprofesional", formData.Titulo_Profesional);
                com.Parameters.AddWithValue("@umensaje1", formData.Mensaje_1);
                com.Parameters.AddWithValue("@umensaje2", formData.Mensaje_2);

                cnn.Open();
                com.ExecuteNonQuery();
                cnn.Close();
            }

            catch (Exception e)
            {
                System.Console.WriteLine(e.Message);
            }


        }

        public void nombreDominio(Models.LandingPage formData)
        {
            try
            {
                string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                SqlConnection cnn = new SqlConnection(connectionString);
                SqlCommand com = new SqlCommand("addName2", cnn);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@udominiopage", formData.Dominio_Page);
                com.Parameters.AddWithValue("@uramo", formData.Ramo);
                com.Parameters.AddWithValue("@uplantilla", formData.Plantilla); 
                com.Parameters.AddWithValue("@ucolor", formData.Color);
                com.Parameters.AddWithValue("@uimagen", formData.Imagen);
                com.Parameters.AddWithValue("@utituloprofesional", formData.Titulo_Profesional);

                cnn.Open();
                com.ExecuteNonQuery();
                cnn.Close();
            }

            catch (Exception e)
            {
                System.Console.WriteLine(e.Message);
            }


        }
        public void addTitulo(Models.LandingPage formData)
        {
            try
            {
                string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                SqlConnection cnn = new SqlConnection(connectionString);
                SqlCommand com = new SqlCommand("addTitulo", cnn);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@udominiopage", formData.Dominio_Page);
                com.Parameters.AddWithValue("@utituloprofesional", formData.Titulo_Profesional);

                cnn.Open();
                com.ExecuteNonQuery();
                cnn.Close();
            }

            catch (Exception e)
            {
                System.Console.WriteLine(e.Message);
            }


        }

        public void clearAseguradoras(Models.LandingPage formData)
        {
            try
            {
                string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                SqlConnection conn = new SqlConnection(connectionString);
                string commandText = "DECLARE @id INT Select @id = A.ID_Page from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio_Page + "%' UPDATE LandingPage2 SET Aseguradora_1 = NULL,  Aseguradora_2 = NULL,  Aseguradora_3 = NULL,  Aseguradora_4 = NULL,  Aseguradora_5 = NULL,  Aseguradora_6 = NULL,  Aseguradora_7 = NULL  WHERE ID_Page = @id AND Ramo LIKE '%" + formData.Ramo + "%'";
                SqlCommand cmd = new SqlCommand(commandText, conn);
                System.Diagnostics.Debug.WriteLine(commandText);
                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();

            }

            catch (Exception e)
            {
                System.Console.WriteLine(e.Message);
            }
        }

        public void addAseguradora(Models.LandingPage formData)
        {
            int test = formData.Campo;


            if (test == 1)
            {
               
                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = "DECLARE @id INT Select @id = A.ID_Page from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio_Page + "%' UPDATE LandingPage2 SET Aseguradora_1 ='" + formData.Aseguradora_1 + "' WHERE ID_Page = @id AND Ramo LIKE '%" + formData.Ramo + "%'";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }

            if (test == 2)
            {
                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = "DECLARE @id INT Select @id = A.ID_Page from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio_Page + "%' UPDATE LandingPage2 SET Aseguradora_2 ='" + formData.Aseguradora_1 + "' WHERE ID_Page = @id AND Ramo LIKE '%" + formData.Ramo + "%'";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }

            if (test == 3)
            {
                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = "DECLARE @id INT Select @id = A.ID_Page from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio_Page + "%' UPDATE LandingPage2 SET Aseguradora_3 ='" + formData.Aseguradora_1 + "' WHERE ID_Page = @id AND Ramo LIKE '%" + formData.Ramo + "%'";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }

            if (test == 4)
            {
                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = "DECLARE @id INT Select @id = A.ID_Page from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio_Page + "%' UPDATE LandingPage2 SET Aseguradora_4 ='" + formData.Aseguradora_1 + "' WHERE ID_Page = @id AND Ramo LIKE '%" + formData.Ramo + "%'";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }

            if (test == 5)
            {
                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = " DECLARE @id INT Select @id = A.ID_Page from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio_Page + "%' UPDATE LandingPage2 SET Aseguradora_5 ='" + formData.Aseguradora_1 + "' WHERE ID_Page = @id AND Ramo LIKE '%" + formData.Ramo + "%'";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }

            if (test == 6)
            {
                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = "DECLARE @id INT Select @id = A.ID_Page from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio_Page + "%' UPDATE LandingPage2 SET Aseguradora_6 ='" + formData.Aseguradora_1 + "' WHERE ID_Page = @id AND Ramo LIKE '%" + formData.Ramo + "%'";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }

            if (test == 7)
            {
                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = "DECLARE @id INT Select @id = A.ID_Page from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio_Page + "%' UPDATE LandingPage2 SET Aseguradora_7 ='" + formData.Aseguradora_1 + "' WHERE ID_Page = @id AND Ramo LIKE '%" + formData.Ramo + "%'";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }



        }

        public void eliminarPagina(Models.LandingPage formData)
        {
            try
            {
                string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                SqlConnection conn = new SqlConnection(connectionString);
                string commandText = "DECLARE @id INT Select @id = A.ID_Page from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio_Page + "%' DELETE FROM LandingPage2 WHERE Ramo LIKE '%" + formData.Ramo + "%' and ID_Page = @id";
                SqlCommand cmd = new SqlCommand(commandText, conn);
                System.Diagnostics.Debug.WriteLine(commandText);
                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();

            }

            catch (Exception e)
            {
                System.Console.WriteLine(e.Message);
            }
        }

        public void addMPrin(Models.LandingPage formData)
        {
            try
            {
                string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                SqlConnection conn = new SqlConnection(connectionString);
                string commandText = "DECLARE @id INT Select @id = A.ID_Page from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio_Page + "%' UPDATE LandingPage2 SET Mensaje_1 ='" + formData.Mensaje_1 + "' WHERE Ramo LIKE '%" + formData.Ramo + "%' and ID_Page = @id";
                SqlCommand cmd = new SqlCommand(commandText, conn);
                System.Diagnostics.Debug.WriteLine(commandText);
                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();

            }

            catch (Exception e)
            {
                System.Console.WriteLine(e.Message);
            }
        }

        public void addMSec(Models.LandingPage formData)
        {
            try
            {
                string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                SqlConnection conn = new SqlConnection(connectionString);
                string commandText = " DECLARE @id INT Select @id = A.ID_Page from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio_Page + "%' UPDATE LandingPage2 SET Mensaje_2 ='" + formData.Mensaje_2 + "' WHERE Ramo LIKE '%" + formData.Ramo + "%' and ID_Page = @id";
                SqlCommand cmd = new SqlCommand(commandText, conn);
                System.Diagnostics.Debug.WriteLine(commandText);
                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();

            }

            catch (Exception e)
            {
                System.Console.WriteLine(e.Message);
            }
        }

        private int findNameData;
        
        public void setNameData(int num)
        {
            findNameData = num;
        }
        
        public JsonResult findName(string formData)
        {
            
            int id;
            try
            {
                string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                SqlConnection conn = new SqlConnection(connectionString);
                SqlCommand com = new SqlCommand("findName2", conn);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@udominiopage", formData);


                conn.Open();

                id = (int)com.ExecuteScalar();
                          
                conn.Close();
             
                
                return Json(id,JsonRequestBehavior.AllowGet);
                
            }
            catch(Exception e)
            {
                
                System.Diagnostics.Debug.WriteLine(e.Message + " This is the error");
                return Json(10,JsonRequestBehavior.AllowGet);
            }
        }

        public void addAgente(Models.LandingPage formData)
        {

            try
            {
                string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                SqlConnection conn = new SqlConnection(connectionString);
                SqlCommand com = new SqlCommand("crearAgente", conn);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@udominio", formData.Dominio_Page);


                conn.Open();
                com.ExecuteNonQuery();
                conn.Close();


            }
            catch (Exception e)
            {

                System.Diagnostics.Debug.WriteLine(e.Message + " This is the error");
            }
        }

        public void addRedes(Models.AgenteSeguro formData)
        {
            try
            {
                string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                SqlConnection conn = new SqlConnection(connectionString);
                SqlCommand com = new SqlCommand("addRedes", conn);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@udominio", formData.Dominio);
                com.Parameters.Add(new SqlParameter("@ufacebook", ToDBNull(formData.Facebook)));
                com.Parameters.Add(new SqlParameter("@utwitter", ToDBNull(formData.Twitter)));
                com.Parameters.Add(new SqlParameter("@uinstagram", ToDBNull(formData.Instagram)));
                com.Parameters.Add(new SqlParameter("@ulinkedin", ToDBNull(formData.LinkedIn)));
                com.Parameters.Add(new SqlParameter("@uyoutube", ToDBNull(formData.Youtube)));

                conn.Open();
                com.ExecuteNonQuery();
                conn.Close();

            }
           

            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e.Message + " This is the error");
            }
        }

        public static object ToDBNull(object value)
        {
            if (null != value)
                return value;
            return DBNull.Value;
        }

        public void addDirc(Models.AgenteSeguro formData)
        {

            try
            {
                string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                SqlConnection conn = new SqlConnection(connectionString);
                SqlCommand com = new SqlCommand("addDireccion", conn);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@udominio", formData.Dominio);
                com.Parameters.AddWithValue("@udcorta", formData.DireccionCorta);

                conn.Open();
                com.ExecuteNonQuery();
                conn.Close();


            }
            catch (Exception e)
            {

                System.Diagnostics.Debug.WriteLine(e.Message + " This is the error");
            }
        }

        public void clearAgente(Models.AgenteSeguro formData)
        {

            try
            {
                string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                SqlConnection conn = new SqlConnection(connectionString);
                SqlCommand com = new SqlCommand("clearAgente", conn);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@udominio", formData.Dominio);

                conn.Open();
                com.ExecuteNonQuery();
                conn.Close();


            }
            catch (Exception e)
            {

                System.Diagnostics.Debug.WriteLine(e.Message + " This is the error");
            }
        }

        public void addTelefono(Models.AgenteSeguro formData)
        {
            int test = formData.Campo;


            if (test == 1)
            {

                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = "DECLARE @id INT Select @id = A.ID_Agente from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio + "%' UPDATE AgenteSeguros SET Telefono_1 ='" + formData.Telefono_1 + "' WHERE ID_Agente = @id";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }

            if (test == 2)
            {
                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = "DECLARE @id INT Select @id = A.ID_Agente from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio + "%' UPDATE AgenteSeguros SET Telefono_2 ='" + formData.Telefono_1 + "' WHERE ID_Agente = @id";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }

            if (test == 3)
            {
                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = "DECLARE @id INT Select @id = A.ID_Agente from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio + "%' UPDATE AgenteSeguros SET Telefono_3 ='" + formData.Telefono_1 + "'  WHERE ID_Agente = @id";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }

            if (test == 4)
            {
                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = "DECLARE @id INT Select @id = A.ID_Agente from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio + "%' UPDATE AgenteSeguros SET Telefono_4 ='" + formData.Telefono_1 + "' WHERE ID_Agente = @id";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }

            if (test == 5)
            {
                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = "DECLARE @id INT Select @id = A.ID_Agente from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio + "%' UPDATE AgenteSeguros SET Telefono_5 ='" + formData.Telefono_1 + "' WHERE ID_Agente = @id";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }

        }

        public void addCorreo(Models.AgenteSeguro formData)
        {
            int test = formData.Campo;


            if (test == 1)
            {

                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = "DECLARE @id INT Select @id = A.ID_Agente from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio + "%' UPDATE AgenteSeguros SET CorreoElectronico_1 ='" + formData.CorreoElectronico_1 + "' WHERE ID_Agente = @id";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }

            if (test == 2)
            {
                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = "DECLARE @id INT Select @id = A.ID_Agente from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio + "%' UPDATE AgenteSeguros SET CorreoElectronico_2 ='" + formData.CorreoElectronico_1 + "' WHERE ID_Agente = @id";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }

            if (test == 3)
            {
                try
                {
                    string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                    SqlConnection conn = new SqlConnection(connectionString);
                    string commandText = "DECLARE @id INT Select @id = A.ID_Agente from AgenteSLandingP A WHERE SubDominio_Page  LIKE '%" + formData.Dominio + "%' UPDATE AgenteSeguros SET CorreoElectronico_3 ='" + formData.CorreoElectronico_1 + "'  WHERE ID_Agente = @id";
                    SqlCommand cmd = new SqlCommand(commandText, conn);
                    System.Diagnostics.Debug.WriteLine(commandText);
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }

                catch (Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
            }

        }

        public void addDex(Models.AgenteSeguro formData)
        {

            try
            {
                string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["UkuviConnect"].ConnectionString;
                SqlConnection conn = new SqlConnection(connectionString);
                SqlCommand com = new SqlCommand("dirExa", conn);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@udominio", formData.Dominio);
                com.Parameters.AddWithValue("@uestado", formData.Dir_Estado);
                com.Parameters.AddWithValue("@umuni", formData.Dir_MuniDele);
                com.Parameters.AddWithValue("@ucalle", formData.Dir_Calle);
                com.Parameters.AddWithValue("@ucolonia", formData.Dir_Colonia);
                com.Parameters.AddWithValue("@unint", formData.Dir_NoInt);
                com.Parameters.AddWithValue("@unext", formData.Dir_NoExt);
                com.Parameters.AddWithValue("@ucp", formData.Dir_CP);

                conn.Open();
                com.ExecuteNonQuery();
                conn.Close();


            }
            catch (Exception e)
            {

                System.Diagnostics.Debug.WriteLine(e.Message + " This is the error");
            }
        }
    }
}