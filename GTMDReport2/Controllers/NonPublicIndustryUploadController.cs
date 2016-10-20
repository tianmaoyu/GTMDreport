using GTMDReport2.Common;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GTMDReport2.Controllers
{
    public class NonPublicIndustryUploadController : Controller
    {
        // GET: NonPublicIndustryUpload
        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public JObject Upload(HttpPostedFileBase file)
        {
            JObject result = new JObject();
            if (string.Empty.Equals(file.FileName) || !Path.GetExtension(file.FileName).Contains(".xls"))
            {
                throw new ArgumentException("文件为空，请选择文件,或者文件格式不对[.xls,.xlsx]");
            }
            var fileName = file.FileName;
            var fileNameWithoutExtension = Path.GetFileNameWithoutExtension(fileName);
            var fileExtension = Path.GetExtension(fileName);
            var NewFileName = fileNameWithoutExtension + DateTime.Now.ToString("yyyy-MM-dd-hhmmss") + fileExtension;
            string path = System.IO.Path.Combine(Server.MapPath("~/App_Data"), NewFileName);
            file.SaveAs(path);
            int total;
            var infos =new ExcelHelper().ReadExcelToJson<EF.NonPublicIndustry>(path,out total);
            result["total"] = total;
            result["rows"] = infos;
            return result;
            //string script = string.Format(@"
            //           <script type='text/javascript'>
            //                alert({0});
            //           </script>", infos);
            //return this.Content(script);
            //return JavaScript(script);
            //return RedirectToAction("Index", "NonPublicIndustryUpload");
        }
    }
}
