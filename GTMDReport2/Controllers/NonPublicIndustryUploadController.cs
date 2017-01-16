using GTMDreport.BLL;
using GTMDReport2.Common;
using LinqToExcel;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
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
            //var infos =new ExcelHelper().ReadExcelToJson<EF.NonPublicIndustry>(path,out total);
            //var entitys=  JsonConvert.DeserializeObject<IEnumerable<EF.NonPublicIndustry>>(infos);
            List<EF.NonPublicIndustry> infoList = new List<EF.NonPublicIndustry>();
            ValidationErrors errors = new ValidationErrors();
            CheckImportData2(path, ref infoList, ref errors);
            if (errors.Count > 0)
            {
                result["errors"] = JArray.Parse(JsonConvert.SerializeObject(errors));
                return result;
            }
            //插入数据库
            //new NonPublicIndustryBLL().BulkInsert(infoList);
            result["data"] = new JObject();
            result["data"]["total"] = infoList.Count;
            result["data"]["rows"] = JArray.Parse(JsonConvert.SerializeObject(infoList));
            return result;
        }

        /// <summary>
        /// 校验Excel数据
        /// </summary>
        public bool CheckImportData(string fileName, ref List<EF.NonPublicIndustry> infoList, ref ValidationErrors errors)
        {
            var targetFile = new FileInfo(fileName);
            if (!targetFile.Exists)
            {
                errors.Add("导入的数据文件不存在");
                return false;
            }
            var excelFile = new ExcelQueryFactory(fileName);
            //对应列头
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.CapitalEconomy, "CapitalEconomy");
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.PrivateEconomy, "PrivateEconomy");
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.GrowthRate, "GrowthRate");
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.Date, "Date");
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.IndexIndustryID, "IndexIndustryID");
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.IndexName, "IndexName");
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.RegionID, "RegionID");
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.RegionName, "RegionName");
            //SheetName
            var excelContent = excelFile.Worksheet<EF.NonPublicIndustry>(0);
            int rowIndex = 1;
            //检查数据正确性
            foreach (var row in excelContent)
            {
                var errorMessage = new StringBuilder();
                EF.NonPublicIndustry info = new EF.NonPublicIndustry();
                info.CapitalEconomy = row.CapitalEconomy;
                info.PrivateEconomy = row.PrivateEconomy;
                info.GrowthRate = row.GrowthRate;
                info.Date = row.Date;
                info.IndexIndustryID = row.IndexIndustryID;
                info.IndexName = row.IndexName;
                info.RegionID = row.RegionID;
                info.RegionName = row.RegionName;
                if (string.IsNullOrWhiteSpace(row.RegionID.ToString()))
                {
                    errorMessage.Append("RegionID - 不能为空. ");
                }
                if (string.IsNullOrWhiteSpace(row.IndexIndustryID.ToString()))
                {
                    errorMessage.Append("IndexIndustryID - 不能为空. ");
                }
                if (string.IsNullOrWhiteSpace(row.Date.ToString()))
                {
                    errorMessage.Append("Date - 不能为空. ");
                }
                //=============================================================================
                if (errorMessage.Length > 0)
                {
                    errors.Add(string.Format("第 {0} 列发现错误：{1}", rowIndex+1,errorMessage));
                }
                infoList.Add(info);
                rowIndex += 1;
            }
            if (errors.Count > 0)
            {
                return false;
            }
            return true;
        }
        /// <summary>
        /// 校验Excel数据
        /// </summary>
        public bool CheckImportData2(string fileName, ref List<EF.NonPublicIndustry> infoList, ref ValidationErrors errors)
        {
            var targetFile = new FileInfo(fileName);
            if (!targetFile.Exists)
            {
                errors.Add("导入的数据文件不存在");
                return false;
            }
            var excelFile = new ExcelQueryFactory(fileName);
            //对应列头
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.CapitalEconomy, "民营经济");
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.PrivateEconomy, "私营");
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.GrowthRate, "同比增长");
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.Date, "月份");
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.IndexIndustryID, "指标ID");
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.IndexName, "指标");
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.RegionID, "地区ID");
            excelFile.AddMapping<EF.NonPublicIndustry>(x => x.RegionName, "地区");
            //SheetName
            var excelContent = excelFile.Worksheet<EF.NonPublicIndustry>(0);
            int rowIndex = 1;
            //检查数据正确性
            foreach (var row in excelContent)
            {
                var errorMessage = new StringBuilder();
                EF.NonPublicIndustry info = new EF.NonPublicIndustry();
                info.CapitalEconomy = row.CapitalEconomy;
                info.PrivateEconomy = row.PrivateEconomy;
                info.GrowthRate = row.GrowthRate;
                info.Date = row.Date;
                info.IndexIndustryID = row.IndexIndustryID;
                info.IndexName = row.IndexName;
                info.RegionID = row.RegionID;
                info.RegionName = row.RegionName;
                if (string.IsNullOrWhiteSpace(row.RegionID.ToString()))
                {
                    errorMessage.Append("地区ID - 不能为空. ");
                }
                if (string.IsNullOrWhiteSpace(row.IndexIndustryID.ToString()))
                {
                    errorMessage.Append("指标ID - 不能为空. ");
                }
                if (string.IsNullOrWhiteSpace(row.Date.ToString()))
                {
                    errorMessage.Append("月份 - 不能为空. ");
                }
                //=============================================================================
                if (errorMessage.Length > 0)
                {
                    errors.Add(string.Format("第 {0} 列发现错误：{1}", rowIndex + 1, errorMessage));
                }
                infoList.Add(info);
                rowIndex += 1;
            }
            if (errors.Count > 0)
            {
                return false;
            }
            return true;
        }
    }
}
