using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using GTMDReport2.EF;
using System.Linq.Expressions;
using Newtonsoft.Json.Linq;

namespace GTMDreport.BLL
{
    public class IndustryCalssificationTBLL
    {
        GTMDReportEntities dbContext;
        public IndustryCalssificationTBLL()
        {
            dbContext = new GTMDReportEntities();
        }

        public List<IndustryCassificationT> GetALl()
        {
            return dbContext.IndustryCassificationTs.ToList();
        }

        public List<IndustryCassificationT> GetALl(Expression<Func<IndustryCassificationT, bool>> conditions)
        {
            return dbContext.IndustryCassificationTs.Where(conditions).ToList();
        }

       

        //public List<IndustryCassificationT> GetAllByDate(DateTime dateTime)
        //{
        //    return dbContext.IndustryCassificationTs.Where(item => item.Date == dateTime).ToList();
        //}

        //public List<IndustryCassificationT> GetAllByRegion(int regionID)
        //{
        //    return dbContext.IndustryCassificationTs.Where(item => item.RegionID == regionID).ToList();
        //}

        //public IQueryable<IndustryCassificationT> GetAllByClassification(int classificationID)
        //{
        //    return dbContext.IndustryCassificationTs.Where(item => item.ClassificationID == classificationID);
        //}

        //public List<IndustryCassificationT> GetAllByClassification(DateTime dateTime, int regionID)
        //{
        //    return dbContext.IndustryCassificationTs.Where(item => item.RegionID == regionID&& item.Date== dateTime).ToList();
        //}

        //public IQueryable<IndustryCassificationT> GetAllByClassification(int dateInt, int regionID)
        //{
        //    return dbContext.IndustryCassificationTs.Where(item => item.RegionID == regionID && ((DateTime)item.Date).Month == dateInt);
        //}

        //public IQueryable<IndustrycCassification> GetInfoForMap(int dateInt, int classificationID)
        //{
        //    return dbContext.IndustrycCassifications.Where(item => item.ClassificationID == classificationID && ((DateTime)item.Date).Month == dateInt);
        //}

        //public IQueryable<IndustryCassificationT> GetALL()
        //{
        //    return dbContext.IndustryCassificationTs;
        //}


    }
}