using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using GTMDreport.ADL;

namespace GTMDreport.BLL
{
    public class ClassificationBLL
    {
        GTMDReportEntities dbContext;
        public ClassificationBLL()
        {
            dbContext = new GTMDReportEntities();
        }

        public List<Classification> GetALl()
        {
            return dbContext.Classifications.ToList();
        } 
    }
}