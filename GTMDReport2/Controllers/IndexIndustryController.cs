using GTMDreport.BLL;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GTMDReport2.Controllers
{
    public class IndexIndustryController : Controller
    {
       
        public JArray list()
        {
            IndexIndustryBLL indexIndustryBLL = new IndexIndustryBLL();
            var infos = indexIndustryBLL.GetALl();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(infos));
            return jarray;
        }
       
    }
}
