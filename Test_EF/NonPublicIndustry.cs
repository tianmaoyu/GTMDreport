namespace Test_EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("NonPublicIndustry")]
    public partial class NonPublicIndustry
    {
        public int ID { get; set; }

        public int? IndexIndustryID { get; set; }

        public double? PrivateEconomy { get; set; }

        public double? CapitalEconomy { get; set; }

        public double? GrowthRate { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Date { get; set; }

        public int? RegionID { get; set; }

        [Column(TypeName = "text")]
        public string IndexName { get; set; }

        [Column(TypeName = "text")]
        public string RegionName { get; set; }

        public virtual IndexIndustry IndexIndustry { get; set; }

        public virtual Region Region { get; set; }
    }
}
