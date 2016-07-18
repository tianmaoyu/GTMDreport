using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace GTMDreport.ADL
{
    public class ReportContext:DbContext
    {
        public ReportContext() : base("name=GTMDReport")
        {
        }
        public DbSet<Classification> Classifications { set; get; }
        public DbSet<IndexIndustrie> IndexIndustrys { set; get; }
        public DbSet<IndustrycCassification> IndustrycCassifications { set; get; }
        public DbSet<NonPublicIndustrie> NonPublicIndustrys { set; get; }
        public DbSet<Region> Regions { set; get; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}