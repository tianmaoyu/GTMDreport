using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GTMDreport.ADL;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Text;

namespace GTMDreport.APIContoller
{
    public class CommonController : ApiController
    {

        // GET api/<controller>/5
        [HttpGet]
        public String GetDate()
        {
            GTMDReportEntities dbContext = new GTMDReportEntities();
            var dates= dbContext.NonPublicIndustries.GroupBy(item=>item.Date).Select(g=>g.Key).ToList();
            List<string> dateTypes = new List<string>();
             dates.ForEach(item =>
            {
               var dtString=  ((DateTime)item).GetDateTimeFormats('y')[0].ToString();
                dateTypes.Add(dtString);
            });
            return JsonConvert.SerializeObject(dateTypes, Formatting.Indented);
        }

    }
}