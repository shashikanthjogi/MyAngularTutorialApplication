using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyAngApp.Controllers
{
    public class LocationsController : ApiController
    {
        [HttpGet()]
        [ActionName("GetLocations")]
        public IEnumerable<Models.Location> GetLocations()
        {
            List<Models.Location> locations = new List<Models.Location>();
            locations.Add(new Models.Location()
            {
                LocationID = "1",
                LocationName = "Warehouse 1"
            });
            locations.Add(new Models.Location()
            {
                LocationID = "2",
                LocationName = "US Warehouse 2"
            });
            locations.Add(new Models.Location()
            {
                LocationID = "3",
                LocationName = "East Asia"
            });
            return locations;
        }

        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}