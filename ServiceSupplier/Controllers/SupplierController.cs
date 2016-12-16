using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ServiceSupplier.Models;
using Newtonsoft.Json;

namespace ServiceSupplier.Controllers
{
    public class SupplierController : ApiController
    {
        // GET: api/Supplier
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Supplier/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Supplier
        public List<Supplier> Post(HttpRequestMessage request)
        {
            var str = request.Content.ReadAsStringAsync().Result;

            List<Supplier> suppliers = JsonConvert.DeserializeObject<List<Supplier>>(str);

            foreach (Supplier s in suppliers)
            {
                s.SupplierName = s.SupplierName.ToUpper();
            }

            return suppliers;
        }

        // PUT: api/Supplier/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Supplier/5
        public void Delete(int id)
        {
        }
    }
}
