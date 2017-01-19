using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GTMDReport2.EF;
using System.Linq.Expressions;
using System.Web.Mvc;
using Newtonsoft.Json.Linq;
using LinqKit;
using Newtonsoft.Json;

namespace GTMDreport.BLL
{
    public class IndustryCalssificationBLL
    {
        GTMDReportEntities dbContext;
        public IndustryCalssificationBLL()
        {
            dbContext = new GTMDReportEntities();
        }

        public List<IndustrycCassification> GetALl()
        {
            return dbContext.IndustrycCassifications.ToList();
        }

        public List<IndustrycCassification> GetALl(Expression<Func<IndustrycCassification,bool>> conditions)
        {
            return dbContext.IndustrycCassifications.Where(conditions).ToList();
        }

        public bool BulkInsert(IEnumerable<IndustrycCassification> infos)
        {
            dbContext.BulkInsert(infos);
            dbContext.BulkSaveChanges();
            return true;
        }
        public IQueryable<IndustrycCassification> GetAllByClassification(int dateInt, int regionID)
        {
            return dbContext.IndustrycCassifications.Where(item => item.RegionID == regionID && ((DateTime)item.Date).Month == dateInt);
        }

        public IQueryable<IndustrycCassification> GetAllByClassification(int classificationID)
        {
            return dbContext.IndustrycCassifications.Where(item => item.ClassificationID == classificationID);
        }

        public JObject GetPager(FormCollection collection)
        {
            JObject jobject = new JObject();
            var pageIndex = collection["page"];
            var pageSize = collection["rows"];
            var queryDate = collection["date"];
            var queryRegion = collection["region"];
            var predicate = PredicateBuilder.True<IndustrycCassification>();
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
            var total = dbContext.IndustrycCassifications.Where(predicate.Compile()).ToList().Count();
            var infos = dbContext.IndustrycCassifications
                .Where(predicate.Compile()).ToList()
                .Skip((_pageIndex - 1) * _pageSize).Take(_pageSize);

            //格式化所有的时间
            //infos.ToList().ForEach(item => ((DateTime)item.Date).GetDateTimeFormats('y')[0].ToString());
            var rows = JArray.Parse(JsonConvert.SerializeObject(infos));
            jobject["rows"] = rows;
            jobject["total"] = total;
            return jobject;
        }

        //得到最近的日期
        public DateTime GetLateDate()
        {
            return  (DateTime)dbContext.IndustrycCassifications.Select(item => item.Date).Min();
        }
        public bool Delete(List<int> ids)
        {
            return dbContext.DeleteBulk<IndustrycCassification>(item => ids.Contains(item.ID));
        }
    }
}