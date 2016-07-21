using GTMDreport.BLL;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;



namespace GTMDreport.APIContoller
{
    public class IndustrycCassificationController : ApiController
    {

        public enum CustomizationEnum
        {
           白酒=3,
           化工=5,
           有色=6,
           冶金=7,
           装备制造=8,
           建材=9,
           医药=12,
           食品=13,
           其它轻工=14
        };

        /// <summary>
        /// 通过日期，地区得到信息
        /// </summary>
        /// <param name="dateInt"></param>
        /// <param name="regionId"></param>
        /// <returns></returns>
        public string GetInfo(int dateInt,int regionId)
        {
            IndustryCalssificationBLL industryCalssification = new IndustryCalssificationBLL();
            //行业名称
            List<string> legendDatas = new List<string>();

            //工业销售产值
            List<double> industrySalesOutputs = new List<double>();

            //工业增加值
            List<double> industryGrowthOutputs = new List<double>();

            //资产总值
            List<double> assetsTotals = new List<double>();

            //负责合计
            List<double> debtTotals = new List<double>();

            //主盈业务收入
            List<double> incomes = new List<double>();

            //存货
            List<double> stocks = new List<double>();

            //定制的行业
            List<int> classificationCustoms = new List<int> { 3, 5, 6, 7, 8, 9, 12, 13, 14 };
            dateInt = dateInt + 1;

            //赛选出classificationCustoms中的行业
            var infos = industryCalssification.GetAllByClassification(dateInt, regionId).Where(item=> classificationCustoms.Contains((int)item.ClassificationID)).OrderBy(i=>i.ClassificationID);
            foreach(IndustrycCassification info in infos)
            {
                legendDatas.Add(info.ClassificationName);
                industrySalesOutputs.Add((double)info.IndustrySalesOutput);
                industryGrowthOutputs.Add((double)info.IndustryGrowthOutput);
                assetsTotals.Add((double)info.AssetsTotal);
                debtTotals.Add((double)info.DebtTotal);
                incomes.Add((double)info.Income);
                stocks.Add((double)info.Stock);
            }
           
            //组装为JSON
            var classificationInfo = new
            {
                LegendData = legendDatas,
                IndustrySalesOutput= industrySalesOutputs,
                IndustryGrowthOutput= industryGrowthOutputs,
                AssetsTotal= assetsTotals,
                DebtTotal= debtTotals,
                Income= incomes,
                Stock= stocks
            };
            return JsonConvert.SerializeObject(classificationInfo);
        }
        //
        // <summary>
        /// 为展示图二做数据组装
        /// </summary>
        /// <param name="dateInt"></param>
        /// <param name="regionId"></param>
        /// <returns>json的数据</returns>
        public JObject GetInfoForRedView(int dateInt, int regionId)
        {
            IndustryCalssificationBLL industryCalssification = new IndustryCalssificationBLL();

            //定制的行业
            List<int> classificationCustoms = new List<int> { 3, 5, 6, 7, 8, 9, 12, 13, 14 };
            dateInt = dateInt + 1;

            JObject jsonObject = new JObject();
            //赛选出classificationCustoms中的行业
            var infos = industryCalssification.GetAllByClassification(dateInt, regionId).Where(item => classificationCustoms.Contains((int)item.ClassificationID)).OrderBy(i => i.ClassificationID).ToList();

            foreach (IndustrycCassification info in infos)
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


        public JObject GetInfoForRadar(int dateIntTarget, int dateIntSource, int regionIdTarget, int regionIdSource)
        {
            JObject result = new JObject();
            //result["Target"] = new JObject();
            //result["Source"] = new JObject();
            IndustryCalssificationBLL industryCalssification = new IndustryCalssificationBLL();
            List<int> classificationCustoms = new List<int> { 3, 5, 6, 7, 8, 9, 12, 13, 14 };
            dateIntTarget = dateIntTarget + 1;
            var infoTargets = industryCalssification.GetAllByClassification(dateIntTarget, regionIdTarget).Where(item => classificationCustoms.Contains((int)item.ClassificationID)).OrderBy(i => i.ClassificationID);
            foreach (IndustrycCassification info in infoTargets)
            {
                string classificationName = info.ClassificationName;
                result[classificationName] = new JObject();
                result[classificationName]["Target"] = new JObject();

                JArray arrayData = new JArray();
                arrayData.Add(CovertDouble(info.IndustryGrowthOutput));
                arrayData.Add(CovertDouble(info.AssetsTotal));
                arrayData.Add(CovertDouble(info.DebtTotal));
                arrayData.Add(CovertDouble(info.Income));
                arrayData.Add(CovertDouble(info.Stock));
                //待处理
                result[classificationName]["Target"]["Title"] = dateIntTarget + "月，" + regionIdTarget + "地区";
                result[classificationName]["Target"]["Data"] = arrayData;

            }
            dateIntSource = dateIntSource + 1;
            var infoSources = industryCalssification.GetAllByClassification(dateIntSource, regionIdSource).Where(item => classificationCustoms.Contains((int)item.ClassificationID)).OrderBy(i => i.ClassificationID);
            foreach (IndustrycCassification info in infoSources)
            {
                 string classificationName = info.ClassificationName;
                //result[classificationName] = new JObject();
                result[classificationName]["Source"] = new JObject();

                JArray arrayData = new JArray();
                arrayData.Add(CovertDouble(info.IndustryGrowthOutput));
                arrayData.Add(CovertDouble(info.AssetsTotal));
                arrayData.Add(CovertDouble(info.DebtTotal));
                arrayData.Add(CovertDouble(info.Income));
                arrayData.Add(CovertDouble(info.Stock));
                //待处理
                result[classificationName]["Source"]["Title"] = dateIntSource + "月，" + regionIdSource + "地区";
                result[classificationName]["Source"]["Data"] = arrayData;

            }

            return result;
        }
        public double CovertDouble(double? value)
        {
            double result = (double)value;
            result=double.Parse(result.ToString("0.00"));
            return result;
        }
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
        
}