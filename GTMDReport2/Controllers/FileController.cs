using GTMDReport2.Common;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GTMDReport2.Controllers
{
    public class FileController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public ActionResult Upload(HttpPostedFileBase file)
        {
            if (string.Empty.Equals(file.FileName) || !Path.GetExtension(file.FileName).Contains(".xls"))
            {
                throw new ArgumentException("文件为空，请选择文件,或者文件格式不对[.xls,.xlsx]");
            }
            var fileName = file.FileName;
            var fileNameWithoutExtension = Path.GetFileNameWithoutExtension(fileName);
            var fileExtension = Path.GetExtension(fileName);
            var NewFileName = fileNameWithoutExtension + DateTime.Now.ToString("yyyy-MM-dd-hhmmss")+ fileExtension;
            string path = System.IO.Path.Combine(Server.MapPath("~/App_Data"), NewFileName);
            file.SaveAs(path);
            var stus = ExcelHelper.ReadExcelToEntityList<EF.NonPublicIndustry>(path);
            return RedirectToAction("Index", "NonPublicIndustryUpload");
        }
        public ActionResult DownloadFile(string fileType)
        {
            var filePath = Server.MapPath("~/App_Data/Template");
            string fileName =default(string);
            if (fileType.Contains("nonPublic"))
            {
               
            }
            string path = filePath + "//" + fileName;
            var name = Path.GetFileName(path);
            return File(path, "application/zip-x-compressed", Url.Encode(name));
        }
   }
}
