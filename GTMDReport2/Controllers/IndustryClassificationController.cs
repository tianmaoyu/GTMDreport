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


        /// <summary>
        /// 行业类别数据[2015以上的类别]
        /// </summary>
        /// <returns></returns>
        public JArray Classifications()
        {
            ClassificationBLL classificationBLL = new ClassificationBLL();
            var infos = classificationBLL.GetListInfos().ToList();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(infos));
            return jarray;
        }

        /// <summary>
        /// 月份列表
        /// </summary>
        /// <returns></returns>
        public JArray Dates()
        {
            IndustryCalssificationBLL industryCalssificationBLL = new IndustryCalssificationBLL();
            var dateList = industryCalssificationBLL.GetALl().Select(item => item.Date).OrderBy(item => item).Distinct().ToList();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(dateList));
            return jarray;
        }
    }
}
