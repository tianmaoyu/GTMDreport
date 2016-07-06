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

        public List<NonPublicIndustry> GetALl()
        {
            return dbContext.NonPublicIndustrys.ToList();
        }


        public List<NonPublicIndustry> GetAllByDate(DateTime dateTime)
        {
            return dbContext.NonPublicIndustrys.Where(item => item.Date == dateTime).ToList();
        }


        public List<NonPublicIndustry> GetAllByRegion(int regionID)
        {
            return dbContext.NonPublicIndustrys.Where(item => item.RegionID == regionID).ToList();
        }


        public List<NonPublicIndustry> GetAllByClassification(int indexID)
        {
            return dbContext.NonPublicIndustrys.Where(item => item.IndexIndustryID == indexID).ToList();
        }


        public List<NonPublicIndustry> GetAllByClassification(DateTime dateTime, int regionID)
        {
            return dbContext.NonPublicIndustrys.Where(item => item.RegionID == regionID && item.Date == dateTime).ToList();
        }
    }
}