using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace GTMDReport2.API
{
    public class JsonDataController : ApiController
    {
        [HttpGet]
        public JObject GuiZhou()
        {
            string path = HttpContext.Current.Server.MapPath("~/JsonData/guizhou.json");
            using (StreamReader file = File.OpenText(path))
            {
                string guizhou = file.ReadToEnd();
                return JObject.Parse(guizhou);
            }
        }
    }
}
