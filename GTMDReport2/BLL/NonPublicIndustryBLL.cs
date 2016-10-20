using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GTMDReport2.EF;
using Newtonsoft.Json;
using System.Linq.Expressions;
using System.Web.Mvc;
using Newtonsoft.Json.Linq;
using LinqKit;

namespace GTMDreport.BLL
{
    public class NonPublicIndustryBLL
    {
        GTMDReportEntities dbContext;
        public NonPublicIndustryBLL()
        {
            dbContext=new GTMDReportEntities();
        }

        public List<NonPublicIndustry> GetALl()
        {
            return dbContext.NonPublicIndustries.ToList();
        }
        public bool SaveInfos(IEnumerable<NonPublicIndustry> infos)
        {
            
            return true;
        }
       
        public List<NonPublicIndustry> GetALl(Expression<Func<NonPublicIndustry, bool>> conditions)
        {
            return dbContext.NonPublicIndustries.Where(conditions).ToList();
        }

        public JObject GetPager(FormCollection collection)
        {
            JObject jobject = new JObject();
            var pageIndex = collection["page"];
            var pageSize = collection["rows"];
            var queryDate = collection["date"];
            var queryRegion = collection["region"];
            var predicate = PredicateBuilder.True<NonPublicIndustry>();
            if (!string.IsNullOrEmpty(queryDate))
            {
                DateTime _queryDate = DateTime.Parse(queryDate);
                predicate = predicate.And(i => ((DateTime)(i.Date)).Equals(_queryDate));
            }
            else
            {
                var _date = GetLateDate();
                predicate = predicate.And(i => ((DateTime)(i.Date)).Equals(_date));
            }

            if (!string.IsNullOrEmpty(queryRegion))
            {
                int _queryRegion = Int32.Parse(queryRegion);
                predicate = predicate.And(i => i.RegionID == _queryRegion);
            }
            else
            {
                //默认为全省
                predicate = predicate.And(i => i.RegionID == 10);
            }

            //错误返回
            if (string.IsNullOrEmpty(pageIndex) && string.IsNullOrEmpty(pageSize)) return null;

            int _pageIndex = Int32.Parse(pageIndex);
            int _pageSize = Int32.Parse(pageSize);
            var total = dbContext.NonPublicIndustries.Where(predicate.Compile()).ToList().Count();
            var infos = dbContext.NonPublicIndustries
                .Where(predicate.Compile()).ToList()
                .Skip((_pageIndex - 1) * _pageSize).Take(_pageSize);

            //格式化所有的时间
            //infos.ToList().ForEach(item => ((DateTime)item.Date).GetDateTimeFormats('y')[0].ToString());
            var rows = JArray.Parse(JsonConvert.SerializeObject(infos));
            jobject["rows"] = rows;
            jobject["total"] = total;
            return jobject;
        }

        public DateTime GetLateDate()
        {
            return (DateTime)dbContext.NonPublicIndustries.Select(item => item.Date).Min();
        }


    }
}