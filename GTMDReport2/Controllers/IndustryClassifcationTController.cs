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
            JsonResult jr = new JsonResult();
            JObject jo = new JObject();
            jo["ccc"] = "ccc";
            jr.Data = jo;
            return jo;
        }

        /// <summary>
        /// 行业类别数据【2013.7-2014.12的】
        /// </summary>
        /// <returns></returns>
        public JArray ClassificationTs()
        {
            ClassificationBLL classificationBLL = new ClassificationBLL();
            var infos = classificationBLL.GetListInfosT().ToList();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(infos));
            return jarray;
        }

        public JArray Dates()
        {
            IndustryCalssificationTBLL industryCalssificationTBLL = new IndustryCalssificationTBLL();
            var dateList = industryCalssificationTBLL.GetALl().Select(item=>item.Date).OrderBy(item=>item).Distinct().ToList();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(dateList));
            return jarray;
        }
    }
}
