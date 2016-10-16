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
 
    }
}
