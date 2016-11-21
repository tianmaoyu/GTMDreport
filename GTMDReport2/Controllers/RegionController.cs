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
    public class RegionController : Controller
    {

        /// <summary>
        /// 所有的地区
        /// </summary>
        /// <returns></returns>
        public JArray GetAll()
        {
            RegionBLL regionBLL = new RegionBLL();
            var infos = regionBLL.GetALl().ToList().OrderByDescending(item=>item.ID).Select(item=>new { id=item.ID,name=item.Name});
            var jarray = JArray.Parse(JsonConvert.SerializeObject(infos));
            return jarray;
        }
    }

}
