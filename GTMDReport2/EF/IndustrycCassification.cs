//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace GTMDReport2.EF
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    
    public partial class IndustrycCassification
    {
        public int ID { get; set; }
        public Nullable<double> IndustryOutput { get; set; }
        public Nullable<double> IndustrySalesOutput { get; set; }
        public Nullable<double> IndustryGrowthOutput { get; set; }
        public Nullable<double> IGO_GrowthRate { get; set; }
        public Nullable<double> AssetsTotal { get; set; }
        public Nullable<double> AT_GrowthRate { get; set; }
        public Nullable<double> DebtTotal { get; set; }
        public Nullable<double> DTG_GrowthRate { get; set; }
        public Nullable<double> Income { get; set; }
        public Nullable<double> Inc_GrowthRate { get; set; }
        public Nullable<double> ProfitsTotal { get; set; }
        public Nullable<double> Pro_GrowthRate { get; set; }
        public Nullable<double> VAT { get; set; }
        public Nullable<double> VAT_GrowthRate { get; set; }
        public Nullable<double> ExpenceInterest { get; set; }
        public Nullable<double> EI_GrowthRate { get; set; }
        public Nullable<double> Stock { get; set; }
        public Nullable<double> St_GrowthRate { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<int> RegionID { get; set; }
        public int ClassificationID { get; set; }
        public string RegionName { get; set; }
        public string ClassificationName { get; set; }
    
        [JsonIgnore]
        public virtual Classification Classification { get; set; }
        [JsonIgnore]
        public virtual Region Region { get; set; }
    }
}
