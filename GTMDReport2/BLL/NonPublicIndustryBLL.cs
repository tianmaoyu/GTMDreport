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

        public List<NonPublicIndustry> GetALl()
        {
            return dbContext.NonPublicIndustries.ToList();
        }


        public List<NonPublicIndustry> GetAllByDate(DateTime dateTime)
        {
            return dbContext.NonPublicIndustries.Where(item => item.Date == dateTime).ToList();
        }


        public List<NonPublicIndustry> GetAllByRegion(int regionID)
        {
            return dbContext.NonPublicIndustries.Where(item => item.RegionID == regionID).ToList();
        }


        public List<NonPublicIndustry> GetAllByClassification(int indexID)
        {
            return dbContext.NonPublicIndustries.Where(item => item.IndexIndustryID == indexID).ToList();
        }


        public List<NonPublicIndustry> GetAllByClassification(DateTime dateTime, int regionID)
        {
            return dbContext.NonPublicIndustries.Where(item => item.RegionID == regionID && item.Date == dateTime).ToList();
        }
    }
}