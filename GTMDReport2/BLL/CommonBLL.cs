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

    }


}