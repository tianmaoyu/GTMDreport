namespace Test_EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("IndustrycCassification")]
    public partial class IndustrycCassification
    {
        public int ID { get; set; }

        public double? IndustryOutput { get; set; }

        public double? IndustrySalesOutput { get; set; }

        public double? IndustryGrowthOutput { get; set; }

        [Column("IGO_ GrowthRate")]
        public double? IGO__GrowthRate { get; set; }

        public double? AssetsTotal { get; set; }

        [Column("AT_ GrowthRate")]
        public double? AT__GrowthRate { get; set; }

        public double? DebtTotal { get; set; }

        [Column("DT_ GrowthRate")]
        public double? DT__GrowthRate { get; set; }

        public double? Income { get; set; }

        [Column("Inc_ GrowthRate")]
        public double? Inc__GrowthRate { get; set; }

        public double? ProfitsTotal { get; set; }

        [Column("Pro_ GrowthRate")]
        public double? Pro__GrowthRate { get; set; }

        public double? VAT { get; set; }

        [Column("VAT_ GrowthRate")]
        public double? VAT__GrowthRate { get; set; }

        public double? ExpenceInterest { get; set; }

        [Column("EI_ GrowthRate")]
        public double? EI__GrowthRate { get; set; }

        public double? Stock { get; set; }

        [Column("St_ GrowthRate")]
        public double? St__GrowthRate { get; set; }

        public DateTime? Date { get; set; }

        public int? RegionID { get; set; }

        public int? ClassificationID { get; set; }

        [Column(TypeName = "text")]
        public string RegionName { get; set; }

        [Column(TypeName = "text")]
        public string ClassificationName { get; set; }

        public virtual Classification Classification { get; set; }

        public virtual Region Region { get; set; }
    }
}
