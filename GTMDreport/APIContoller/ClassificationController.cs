using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GTMDreport.ADL;

namespace GTMDreport.APIContoller
{
    public class RegionController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            ReportContext dbContext=new ReportContext();
            var classifications=dbContext.Classifications.ToList();
            var IndexIndustrys = dbContext.IndexIndustrys.ToList();
            var NonPublicIndustrys = dbContext.NonPublicIndustrys.ToList();
            var Regions = dbContext.Regions.ToList();
            var IndustrycCassifications = dbContext.IndustrycCassifications.ToList();
       

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