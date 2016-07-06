using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GTMDreport.ADL;

namespace GTMDreport.BLL
{
    public class IndustryCalssificationBLL
    {
        ReportContext dbContext;
        public IndustryCalssificationBLL()
        {
            dbContext = new ReportContext();
        }

        public List<IndustrycCassification> GetALl()
        {
            return dbContext.IndustrycCassifications.ToList();
        }

        public List<IndustrycCassification> GetAllByDate(DateTime dateTime)
        {
            return dbContext.IndustrycCassifications.Where(item => item.Date == dateTime).ToList();
        }

        public List<IndustrycCassification> GetAllByRegion(int regionID)
        {
            return dbContext.IndustrycCassifications.Where(item => item.RegionID == regionID).ToList();
        }

        public List<IndustrycCassification> GetAllByClassification(int classificationID)
        {
            return dbContext.IndustrycCassifications.Where(item => item.ClassificationID == classificationID).ToList();
        }

        public List<IndustrycCassification> GetAllByClassification(DateTime dateTime, int regionID)
        {
            return dbContext.IndustrycCassifications.Where(item => item.RegionID == regionID&& item.Date== dateTime).ToList();
        }
    }
}