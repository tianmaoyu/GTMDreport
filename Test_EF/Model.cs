namespace Test_EF
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model : DbContext
    {
        public Model()
            : base("name=Modeltest")
        {
        }

        public virtual DbSet<Classification> Classifications { get; set; }
        public virtual DbSet<IndexIndustry> IndexIndustries { get; set; }
        public virtual DbSet<IndustrycCassification> IndustrycCassifications { get; set; }
        public virtual DbSet<NonPublicIndustry> NonPublicIndustries { get; set; }
        public virtual DbSet<Region> Regions { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Classification>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<IndexIndustry>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<IndustrycCassification>()
                .Property(e => e.RegionName)
                .IsUnicode(false);

            modelBuilder.Entity<IndustrycCassification>()
                .Property(e => e.ClassificationName)
                .IsUnicode(false);

            modelBuilder.Entity<NonPublicIndustry>()
                .Property(e => e.IndexName)
                .IsUnicode(false);

            modelBuilder.Entity<NonPublicIndustry>()
                .Property(e => e.RegionName)
                .IsUnicode(false);

            modelBuilder.Entity<Region>()
                .Property(e => e.Name)
                .IsUnicode(false);
        }
    }
}
