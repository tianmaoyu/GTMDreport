using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GTMDreport.ADL;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

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


            GTMDReportEntities dbContext = new GTMDReportEntities();
            //ReportContext dbContext = new ReportContext();
            var classifications = dbContext.Classifications.ToList();
            var IndexIndustrys = dbContext.IndexIndustries.ToList();
            var NonPublicIndustrys = dbContext.NonPublicIndustries.ToList();
            var Regions = dbContext.Regions;
            var IndustrycCassifications = dbContext.IndustrycCassifications.ToList();
           

            //忽略循环引用
            JsonSerializerSettings jsSettings = new JsonSerializerSettings();
            jsSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;

            string result2 = JsonConvert.SerializeObject(IndexIndustrys, jsSettings);

            return JsonConvert.SerializeObject(Regions, Formatting.Indented);
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