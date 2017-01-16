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
    public class IndustryClassificationUploadController : Controller
    {
        // GET: IndustryClassificationUpload
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
            List<EF.IndustrycCassification> infoList = new List<EF.IndustrycCassification>();
            ValidationErrors errors = new ValidationErrors();
            CheckImportData(path, ref infoList, ref errors);
            if (errors.Count > 0)
            {
                result["errors"] = JArray.Parse(JsonConvert.SerializeObject(errors));
                return result;
            }
            //插入数据库
            //new IndustryCalssificationBLL().BulkInsert(infoList);
            result["data"] = new JObject();
            result["data"]["total"] = infoList.Count;
            result["data"]["rows"] = JArray.Parse(JsonConvert.SerializeObject(infoList));
            return result;
        }

        /// <summary>
        /// 校验Excel数据
        /// </summary>
        public bool CheckImportData(string fileName, ref List<EF.IndustrycCassification> infoList, ref ValidationErrors errors)
        {
            var targetFile = new FileInfo(fileName);
            if (!targetFile.Exists)
            {
                errors.Add("导入的数据文件不存在");
                return false;
            }
            var excelFile = new ExcelQueryFactory(fileName);
            //对应列头
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.IndustryOutput, "IndustryOutput");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.IndustrySalesOutput, "IndustrySalesOutput");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.IndustryGrowthOutput, "IndustryGrowthOutput");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.IGO_GrowthRate, "IGO_GrowthRate");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.AssetsTotal, "AssetsTotal");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.AT_GrowthRate, "AT_GrowthRate");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.DebtTotal, "DebtTotal");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.DTG_GrowthRate, "DTG_GrowthRate");

            excelFile.AddMapping<EF.IndustrycCassification>(x => x.Income, "Income");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.Inc_GrowthRate, "Inc_GrowthRate");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.ProfitsTotal, "ProfitsTotal");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.Pro_GrowthRate, "Pro_GrowthRate");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.VAT, "VAT");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.VAT_GrowthRate, "VAT_GrowthRate");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.ExpenceInterest, "ExpenceInterest");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.EI_GrowthRate, "EI_GrowthRate");

            excelFile.AddMapping<EF.IndustrycCassification>(x => x.Stock, "Stock");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.St_GrowthRate, "St_GrowthRate");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.Date, "Date");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.RegionID, "RegionID");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.RegionName, "RegionName");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.ClassificationID, "ClassificationID");
            excelFile.AddMapping<EF.IndustrycCassification>(x => x.ClassificationName, "ClassificationName");
            //SheetName
            var excelContent = excelFile.Worksheet<EF.IndustrycCassification>(0);
            int rowIndex = 1;
            //检查数据正确性
            foreach (var row in excelContent)
            {
                var errorMessage = new StringBuilder();
                EF.IndustrycCassification info = new EF.IndustrycCassification();
                info.IndustryOutput = row.IndustryOutput;
                info.IndustrySalesOutput= row.IndustrySalesOutput;
                info.IndustryGrowthOutput= row.IndustryGrowthOutput;
                info.IGO_GrowthRate =row.IGO_GrowthRate;
                info.AssetsTotal = row.AssetsTotal;
                info.AT_GrowthRate = row.AT_GrowthRate;
                info.DebtTotal = row.DebtTotal;
                info.DTG_GrowthRate = row.DTG_GrowthRate;

                info.Income = row.Income;
                info.Inc_GrowthRate = row.Inc_GrowthRate;
                info.ProfitsTotal = row.ProfitsTotal;
                info.Pro_GrowthRate = row.Pro_GrowthRate;
                info.VAT = row.VAT;
                info.VAT_GrowthRate = row.VAT_GrowthRate;
                info.ExpenceInterest = row.ExpenceInterest;
                info.EI_GrowthRate = row.EI_GrowthRate;

                info.Stock = row.Stock;
                info.St_GrowthRate = row.St_GrowthRate;
                info.Date = row.Date;
                info.RegionID = row.RegionID;
                info.RegionName = row.RegionName;
                info.ClassificationID = row.ClassificationID;
                info.ClassificationName = row.ClassificationName;
              

                if (string.IsNullOrWhiteSpace(row.RegionID.ToString()))
                {
                    errorMessage.Append("RegionID - 不能为空. ");
                }
                if (string.IsNullOrWhiteSpace(row.ClassificationID.ToString()))
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
