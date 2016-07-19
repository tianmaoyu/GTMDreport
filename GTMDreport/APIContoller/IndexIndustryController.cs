using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GTMDreport.APIContoller
{
    public class IndexIndustryController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            GTMDReportEntities dbContext = new GTMDReportEntities();
            var indexIndustries = dbContext.IndexIndustries;
            return JsonConvert.SerializeObject(indexIndustries, Formatting.Indented); 
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
        // GET api/<controller>/GetALL
        public string GetALL()
        {
            GTMDReportEntities dbContext = new GTMDReportEntities();
            var indexIndustries = dbContext.IndexIndustries;
            return JsonConvert.SerializeObject(indexIndustries, Formatting.Indented);
        }
    }
}