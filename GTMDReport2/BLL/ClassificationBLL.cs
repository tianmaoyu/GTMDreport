using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using GTMDReport2.EF;

namespace GTMDreport.BLL
{
    public class ClassificationBLL
    {
        GTMDReportEntities dbContext;
        public ClassificationBLL()
        {
            dbContext = new GTMDReportEntities();
        }

        public List<Classification> GetALl()
        {
            return dbContext.Classifications.ToList();
        }
        /// <summary>
        /// 得到2015后的行业类别【民营经济中的工业分行业】
        /// </summary>
        /// <returns></returns>
        public IQueryable<Classification> GetListInfos()
        {
            return GetInfosByID(0, 14);
        }

        /// <summary>
        /// 的到2013.7月到-2014.12月的行业类别【民营经济中的工业分行业】
        /// </summary>
        /// <returns></returns>
        public IQueryable<Classification> GetListInfosT()
        {
            return GetInfosByID(15, 56);
        }
        public IQueryable<Classification> GetInfosByID(int startID,int endID)
        {
           return  dbContext.Classifications.Where(item => item.ID >= startID && item.ID <= endID);
        }
    }
}