//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace GTMDreport
{
    using System;
    using System.Collections.Generic;
    
    public partial class NonPublicIndustrie
    {
        public int ID { get; set; }
        public Nullable<int> IndexIndustryID { get; set; }
        public Nullable<double> PrivateEconomy { get; set; }
        public Nullable<double> CapitalEconomy { get; set; }
        public Nullable<double> GrowthRate { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<int> RegionID { get; set; }
        public string IndexName { get; set; }
        public string RegionName { get; set; }
    
        public virtual IndexIndustrie IndexIndustrie { get; set; }
        public virtual Region Region { get; set; }
    }
}
