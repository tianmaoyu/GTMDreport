using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GTMDReport2.EF;

namespace GTMDreport.BLL
{
    public class RegionBLL
    {
        GTMDReportEntities dbContext;
        public RegionBLL()
        {
            dbContext = new GTMDReportEntities();
        }

        public IQueryable<Region> GetALl()
        {
            return dbContext.Regions;
        }

    }
}