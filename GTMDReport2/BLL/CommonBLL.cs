using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GTMDReport2.EF;

namespace GTMDReport2.BLL
{
    public class CommonBLL
    {

        GTMDReportEntities dbContext;
        public CommonBLL()
        {
            dbContext = new GTMDReportEntities();
        }

        public DateTime GetLateDateForIndexT()
        {
            return (DateTime)dbContext.IndustryCassificationTs.Select(item => item.Date).Min();
        }

        public DateTime GetLateDateForIndex()
        {
            return (DateTime)dbContext.IndustrycCassifications.Select(item => item.Date).Min();
        }

        public DateTime GetLateDateForNon()
        {
            return (DateTime)dbContext.NonPublicIndustries.Select(item => item.Date).Min();
        }

        //public DateTime GetLateDateForIndexT()
        //{
        //   IndustryCassificationT industryCassificationT = new IndustryCassificationT();
        //   return GetDateLateDate<IndustryCassificationT>(new IndustryCassificationT());
        //}

        //public DateTime GetDateLateDate<T>(T entity) where T : BaseCommon
        //{
        //    return (DateTime)dbContext.Set<T>().Select(item => item.Date).Min();
        //}
    }


    //public class BaseCommon
    //{
    //    public Nullable<DateTime> Date { get; set; }
    //}
}