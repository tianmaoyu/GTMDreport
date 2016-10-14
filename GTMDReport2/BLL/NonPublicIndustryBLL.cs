using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GTMDReport2.EF;
using Newtonsoft.Json;

namespace GTMDreport.BLL
{
    public class NonPublicIndustryBLL
    {
        GTMDReportEntities dbContext;
        public NonPublicIndustryBLL()
        {
            dbContext=new GTMDReportEntities();
        }

        public List<NonPublicIndustrie> GetALl()
        {
            return dbContext.NonPublicIndustries.ToList();
        }


        public List<NonPublicIndustrie> GetAllByDate(DateTime dateTime)
        {
            return dbContext.NonPublicIndustries.Where(item => item.Date == dateTime).ToList();
        }


        public List<NonPublicIndustrie> GetAllByRegion(int regionID)
        {
            return dbContext.NonPublicIndustries.Where(item => item.RegionID == regionID).ToList();
        }


        public List<NonPublicIndustrie> GetAllByClassification(int indexID)
        {
            return dbContext.NonPublicIndustries.Where(item => item.IndexIndustryID == indexID).ToList();
        }


        public List<NonPublicIndustrie> GetAllByClassification(DateTime dateTime, int regionID)
        {
            return dbContext.NonPublicIndustries.Where(item => item.RegionID == regionID && item.Date == dateTime).ToList();
        }
    }
}