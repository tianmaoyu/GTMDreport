using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GTMDReport2.EF;
using System.Linq.Expressions;

namespace GTMDreport.BLL
{
    public class IndustryCalssificationBLL
    {
        GTMDReportEntities dbContext;
        public IndustryCalssificationBLL()
        {
            dbContext = new GTMDReportEntities();
        }

        public List<IndustrycCassification> GetALl()
        {
            return dbContext.IndustrycCassifications.ToList();
        }

        public List<IndustrycCassification> GetALl(Expression<Func<IndustrycCassification,bool>> conditions)
        {
            return dbContext.IndustrycCassifications.Where(conditions).ToList();
        }

    }
}