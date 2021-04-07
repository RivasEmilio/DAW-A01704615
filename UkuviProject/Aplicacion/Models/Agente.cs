using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Agente
    {
        public string subdominio { get; set; }

        public int id { get; set; }

        public bool Existe { get; set; } = false;
        public Agente(string subdominio)
        {
            using (SqlConnection cnx = new SqlConnection("Data Source=198.71.60.219;Initial Catalog=UkuviTec;Integrated Security=False;User Id=sa;Password=Ukuvi@Tec01;MultipleActiveResultSets=True"))
            {
                SqlCommand cmd = cnx.CreateCommand();
                cmd.CommandText = $"Select Id_agente from AgenteSLandingP WHERE Dominio_mascara = '{subdominio}'";
                cnx.Open();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        id = Convert.ToInt32(reader["Id_agente"]);
                        this.subdominio = subdominio;
                        Existe = true;
                    }
                }
            }
        }
    }
}