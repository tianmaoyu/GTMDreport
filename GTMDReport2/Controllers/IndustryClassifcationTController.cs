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
    public class IndustryClassifcationTController : Controller
    {
        // GET: IndustryClassifcationT
        public ActionResult Index()
        {
            return View();
        }

        public JObject GetPagerInfo(FormCollection collection)
        {
            IndustryCalssificationTBLL classificationTBLL = new IndustryCalssificationTBLL();
            return classificationTBLL.GetPager(collection);
        }

       
        public JArray ClassificationTs()
        {
            IndustryCalssificationTBLL classificationTBLL = new IndustryCalssificationTBLL();
            var infos = classificationTBLL.GetALl().ToList();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(infos));
            return jarray;
        }

        public JArray Dates()
        {
            IndustryCalssificationTBLL industryCalssificationTBLL = new IndustryCalssificationTBLL();
            var dateList = industryCalssificationTBLL.GetALl().Select(item=>new { value=item.Date ,text=item.Date}).OrderBy(item=>item.value).Distinct().ToList();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(dateList));
            return jarray;
        }
    }
}
