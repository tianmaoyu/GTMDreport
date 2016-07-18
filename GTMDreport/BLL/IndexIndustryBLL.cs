using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GTMDreport.ADL;

namespace GTMDreport.BLL
{
    public class IndexIndustryBLL
    {
        ReportContext dbContext;
        public IndexIndustryBLL()
        {
            dbContext = new ReportContext();
        }

        public List<IndexIndustrie> GetALl()
        {
            return dbContext.IndexIndustrys.ToList();
        }
    }
}