using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class JourneyController : ApiController
    {
        // GET: api/Journey
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Journey/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Journey
        public void Post([FromBody]JourneyRequestModel value)
        {
        }

        // PUT: api/Journey/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Journey/5
        public void Delete(int id)
        {
        }
    }
}
