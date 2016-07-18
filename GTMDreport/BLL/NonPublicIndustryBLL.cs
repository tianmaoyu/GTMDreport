using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GTMDreport.ADL;
using Newtonsoft.Json;

namespace GTMDreport.BLL
{
    public class NonPublicIndustryBLL
    {
        ReportContext dbContext;
        public NonPublicIndustryBLL()
        {
            dbContext=new ReportContext();
        }

        public List<NonPublicIndustrie> GetALl()
        {
            return dbContext.NonPublicIndustrys.ToList();
        }


        public List<NonPublicIndustrie> GetAllByDate(DateTime dateTime)
        {
            return dbContext.NonPublicIndustrys.Where(item => item.Date == dateTime).ToList();
        }


        public List<NonPublicIndustrie> GetAllByRegion(int regionID)
        {
            return dbContext.NonPublicIndustrys.Where(item => item.RegionID == regionID).ToList();
        }


        public List<NonPublicIndustrie> GetAllByClassification(int indexID)
        {
            return dbContext.NonPublicIndustrys.Where(item => item.IndexIndustryID == indexID).ToList();
        }


        public List<NonPublicIndustrie> GetAllByClassification(DateTime dateTime, int regionID)
        {
            return dbContext.NonPublicIndustrys.Where(item => item.RegionID == regionID && item.Date == dateTime).ToList();
        }
    }
}