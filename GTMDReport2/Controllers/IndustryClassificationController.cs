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

        public JObject GetPager(FormCollection collection)
        {

            IndustryCalssificationBLL classificationBLL = new IndustryCalssificationBLL();
            return classificationBLL.GetPager(collection);
        }

        /// <summary>
        /// 月份列表
        /// </summary>
        /// <returns></returns>
        public JArray Dates()
        {
            IndustryCalssificationBLL industryCalssificationBLL = new IndustryCalssificationBLL();
            var dateList = industryCalssificationBLL.GetALl().Select(item => new { value = item.Date, text = ((DateTime)item.Date).GetDateTimeFormats('y')[0].ToString() })
                 .OrderBy(item => item.value).Distinct().ToList();
            var jarray = JArray.Parse(JsonConvert.SerializeObject(dateList));
            return jarray;
        }


        // GET: IndustryClassification
        public ActionResult ViewChart()
        {
            return View();
        }

        // GET: IndustryClassification
        public ActionResult ViewChartRed()
        {
            return View();
        }
        public JObject GetInfoForView(int classificationID)
        {
            JObject result = new JObject();
            RegionBLL regionBLL = new RegionBLL();
            Dictionary<int, string> regionDic = regionBLL.GetALl().OrderBy(item => item.ID).ToDictionary(i => i.ID, i => i.Name);
            IndustryCalssificationBLL industryCalssification = new IndustryCalssificationBLL();
            var group = industryCalssification.GetAllByClassification(classificationID).OrderBy(i => i.RegionID).ThenBy(i => i.Date).GroupBy(_item => _item.RegionID);
            foreach (var infos in group)
            {
                JArray array = new JArray();
                string regionName = null;
                foreach (var info in infos)
                {
                    JArray _array = new JArray();
                    int regionID = (int)info.RegionID;
                    int month = ((DateTime)info.Date).Month;
                    regionName = regionDic[regionID].ToString();
                    _array.Add(month);
                    _array.Add(CovertDouble(info.IndustryGrowthOutput));
                    _array.Add(CovertDouble(info.AssetsTotal));
                    _array.Add(CovertDouble(info.DebtTotal));
                    _array.Add(CovertDouble(info.Income));
                    _array.Add(CovertDouble(info.Stock));
                    array.Add(_array);
                }

                if (regionName != null && result.GetValue(regionName) == null)
                {
                    result[regionName] = array;
                }
            }
            return result;
        }


        public double CovertDouble(double? value)
        {
            if (value == null)
            {
                return 0.0;
            }
            double result = (double)value;
            result = double.Parse(result.ToString("0.00"));
            return result;
        }
        // <summary>
        /// 为展示图二做数据组装
        /// </summary>
        /// <param name="dateInt"></param>
        /// <param name="regionId"></param>
        /// <returns>json的数据</returns>
        public JObject GetInforRedView(int dateInt, int regionId)
        {
            IndustryCalssificationBLL industryCalssification = new IndustryCalssificationBLL();
            //定制的行业
            List<int> classificationCustoms = new List<int> { 3, 5, 6, 7, 8, 9, 12, 13, 14 };
            //dateInt = dateInt + 1;
            JObject jsonObject = new JObject();
            //赛选出classificationCustoms中的行业
            var infos = industryCalssification.GetAllByClassification(dateInt, regionId).Where(item => classificationCustoms.Contains((int)item.ClassificationID)).OrderBy(i => i.ClassificationID).ToList();
            foreach (var info in infos)
            {
                string classificationName = info.ClassificationName;
                jsonObject[classificationName] = new JObject();
                JArray arrayData = new JArray();
                arrayData.Add((double)info.IndustryGrowthOutput);
                arrayData.Add((double)info.AssetsTotal);
                arrayData.Add((double)info.DebtTotal);
                arrayData.Add((double)info.Income);
                arrayData.Add((double)info.Stock);
                jsonObject[classificationName]["Data"] = arrayData;
                JArray arrayRate = new JArray();
                arrayRate.Add((double)info.IGO_GrowthRate);
                arrayRate.Add((double)info.AT_GrowthRate);
                arrayRate.Add((double)info.DTG_GrowthRate);
                arrayRate.Add((double)info.Inc_GrowthRate);
                arrayRate.Add((double)info.St_GrowthRate);
                jsonObject[classificationName]["Rate"] = arrayRate;
            }
            return jsonObject;
        }

    }
}
