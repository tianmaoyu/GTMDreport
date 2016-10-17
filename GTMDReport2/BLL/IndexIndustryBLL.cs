using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GTMDReport2.EF;

namespace GTMDreport.BLL
{
    public class IndexIndustryBLL
    {
        GTMDReportEntities dbContext;
        public IndexIndustryBLL()
        {
            dbContext = new GTMDReportEntities();
        }

        public IQueryable<IndexIndustry> GetALl()
        {
            return dbContext.IndexIndustries;
        }
    }
}