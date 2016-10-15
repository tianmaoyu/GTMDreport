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
    public class ClassificationController : Controller
    {

        /// <summary>
        /// 行业类别数据[2015以上的类别]
        /// </summary>
        /// <returns></returns>
        public JArray List()
        {
            ClassificationBLL classificationBLL = new ClassificationBLL();
            var infos= classificationBLL.GetListInfos().ToList();
            var jarray= JArray.Parse(JsonConvert.SerializeObject(infos));
            return jarray;
        }

        /// <summary>
        /// 行业类别数据【2013.7-2014.12的】
        /// </summary>
        /// <returns></returns>
        public JArray ListT()
        {
            ClassificationBLL classificationBLL = new ClassificationBLL();
            var infos = classificationBLL.GetListInfosT().ToList();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(infos));
            return jarray;
        }

    }
}
