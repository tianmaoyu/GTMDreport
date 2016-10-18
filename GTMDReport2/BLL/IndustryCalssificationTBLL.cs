using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using LinqKit;
using GTMDReport2.EF;
using System.Linq.Expressions;
using Newtonsoft.Json.Linq;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace GTMDreport.BLL
{
    public class IndustryCalssificationTBLL
    {
        GTMDReportEntities dbContext;
        public IndustryCalssificationTBLL()
        {
            dbContext = new GTMDReportEntities();
        }

        public List<IndustryCassificationT> GetALl()
        {
            return dbContext.IndustryCassificationTs.ToList();
        }

        public List<IndustryCassificationT> GetALl(Expression<Func<IndustryCassificationT, bool>> conditions)
        {
            return dbContext.IndustryCassificationTs.Where(conditions).ToList();
        }

        public JObject GetPager(FormCollection collection)
        {
            JObject jobject = new JObject();
            var pageIndex = collection["page"];
            var pageSize = collection["rows"];
            var queryDate = collection["date"];
            var queryRegion = collection["region"];
            var predicate = PredicateBuilder.True<IndustryCassificationT>();
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
            var total = dbContext.IndustryCassificationTs.Where(predicate.Compile()).ToList().Count();
            var infos = dbContext.IndustryCassificationTs.Where(predicate.Compile()).ToList().Skip((_pageIndex - 1) * _pageSize).Take(_pageSize);
            var rows = JArray.Parse(JsonConvert.SerializeObject(infos));
            jobject["rows"] = rows;
            jobject["total"] = total;
            return jobject;
        }

        public DateTime GetLateDate()
        {
            return (DateTime)dbContext.IndustryCassificationTs.Select(item => item.Date).Min();
        }


    }
}