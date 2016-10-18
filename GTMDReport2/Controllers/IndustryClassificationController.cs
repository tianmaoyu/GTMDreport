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
    public class IndustryClassificationController : Controller
    {
        // GET: IndustryClassification
        public ActionResult Index()
        {
            return View();
        }

        public JObject GetPager(FormCollection collection)
        {

            IndustryCalssificationBLL classificationBLL = new IndustryCalssificationBLL();
            return classificationBLL.GetPager(collection);
        }

        /// <summary>
        /// 月份列表
        /// </summary>
        /// <returns></returns>
        public JArray Dates()
        {
            IndustryCalssificationBLL industryCalssificationBLL = new IndustryCalssificationBLL();
            var dateList = industryCalssificationBLL.GetALl().Select(item => new { value = item.Date, text = ((DateTime)item.Date).GetDateTimeFormats('y')[0].ToString() })
                 .OrderBy(item => item.value).Distinct().ToList();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(dateList));
            return jarray;
        }
    }
}
