using GTMDreport.BLL;
using GTMDReport2.BLL;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GTMDReport2.Controllers
{
    public class CommonController : Controller
    {

        /// <summary>
        /// 行业类别数据[2015以上的类别]
        /// </summary>
        /// <returns></returns>
        public JArray Classification()
        {
            ClassificationBLL classificationBLL = new ClassificationBLL();
            var infos = classificationBLL.GetListInfos().ToList();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(infos));
            return jarray;
        }

        /// <summary>
        /// 行业类别数据【2013.7-2014.12的】
        /// </summary>
        /// <returns></returns>
        public JArray ClassificationT()
        {
            ClassificationBLL classificationBLL = new ClassificationBLL();
            var infos = classificationBLL.GetListInfosT().ToList();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(infos));
            return jarray;
        }
        /// <summary>
        /// 所有的地区
        /// </summary>
        /// <returns></returns>
        public JArray Region()
        {
            RegionBLL regionBLL = new RegionBLL();
            var infos = regionBLL.GetALl();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(infos));
            return jarray;
        }

        /// <summary>
        /// 所有的地区
        /// </summary>
        /// <returns></returns>
        public JArray GetDateListForIndex()
        {
            CommonBLL commonBLL = new CommonBLL();
            var infos = commonBLL.GetLateDateForIndex();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(infos));
            return jarray;
        }

        /// <summary>
        /// 所有的地区
        /// </summary>
        /// <returns></returns>
        public JArray GetDateListForIndexT()
        {
            CommonBLL commonBLL = new CommonBLL();
            var infos = commonBLL.GetLateDateForIndexT();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(infos));
            return jarray;
        }

        /// <summary>
        /// 所有的地区
        /// </summary>
        /// <returns></returns>
        public JArray GetDateListForNon()
        {
            CommonBLL commonBLL = new CommonBLL();
            var infos = commonBLL.GetLateDateForNon();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(infos));
            return jarray;
        }
    }
}
