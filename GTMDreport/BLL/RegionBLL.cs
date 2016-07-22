using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GTMDreport.ADL;

namespace GTMDreport.BLL
{
    public class RegionBLL
    {
        GTMDReportEntities dbContext;
        public RegionBLL()
        {
            dbContext = new GTMDReportEntities();
        }

        public List<Region> GetALl()
        {
            return dbContext.Regions.ToList();
        }

    }
}