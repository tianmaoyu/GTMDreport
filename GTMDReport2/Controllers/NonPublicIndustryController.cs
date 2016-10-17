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
    public class NonPublicIndustryController : Controller
    {
        // GET: NonPublicIndustry
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 所有的指标
        /// </summary>
        /// <returns></returns>
        public JArray Indexs()
        {
            IndexIndustryBLL indexIndustryBLL = new IndexIndustryBLL();
            var infos = indexIndustryBLL.GetALl().ToList();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(infos));
            return jarray;
        }

        /// <summary>
        /// 月份列表
        /// </summary>
        /// <returns></returns>
        public JArray Dates()
        {
            NonPublicIndustryBLL nonPublicIndustryBLL = new NonPublicIndustryBLL();
            var dateList = nonPublicIndustryBLL.GetALl().Select(item => item.Date).OrderBy(item => item).Distinct().ToList();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(dateList));
            return jarray;
        }
      
    }
}
