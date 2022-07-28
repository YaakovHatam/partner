using Oracle.ManagedDataAccess.Client;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class ValuesController : ApiController
    {
        private const string _connectionString = "Data Source=(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=*************)(PORT=1521))(CONNECT_DATA=(SID=********)));User Id=*********;Password=**********;";

        // GET api/values
        public DataTable Get()
        {
            OracleConnection o_Connection = new OracleConnection();
            o_Connection.ConnectionString = _connectionString;
            o_Connection.Open();

            DataTable ContractInfoDT = new DataTable();
            OracleCommand o_Command = new OracleCommand();

            o_Command.Connection = o_Connection;
            o_Command.CommandText = "SELECT * FROM PartnerLAB1";
            o_Command.CommandType = CommandType.Text;
            OracleDataReader odr = o_Command.ExecuteReader();
            ContractInfoDT.Load(odr);

            o_Connection.Close();

            return ContractInfoDT;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public HttpResponseMessage Post([FromBody]ParntnerLabl1Model value)
        {
            // 
            OracleConnection o_Connection = new OracleConnection();
            o_Connection.ConnectionString = _connectionString;
            o_Connection.Open();

            OracleCommand o_Command = new OracleCommand();

            o_Command.Connection = o_Connection;
            o_Command.CommandText = string.Format("INSERT INTO PartnerLAB1 VALUES ({0}, '{1}', '{2}', '{3}', '{4}')",
                value.PERSONID, value.LASTNAME, value.FIRSTNAME, value.ADDRESS, value.CITY);

            o_Command.CommandType = CommandType.Text;
            
            try
            {
                int rowsAffected = o_Command.ExecuteNonQuery();
                return new HttpResponseMessage(rowsAffected == 1 ? HttpStatusCode.Created : HttpStatusCode.OK);
            }
            catch (OracleException oex)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            finally
            {
                o_Connection.Close();
            }

       

         
                

        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
