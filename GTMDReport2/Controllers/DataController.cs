using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GTMDReport2.Controllers
{
    public class DataController : Controller
    {
        // GET: Summary
        public ActionResult Index()
        {
            string viewName = "Index" + Request.QueryString["year"];

            return View();
        }
        //increase 增加值
        public ActionResult Increase()
        {
            string viewName = "Increase" + Request.QueryString["year"] ;
            return View(viewName);
        }

        //basic situation 基本情况
        public ActionResult BasicSituation()
        {
            string viewName = "BasicSituation" + Request.QueryString["year"] ;
            return View(viewName);
        }
        //国税收入
        public ActionResult IRSIncome()
        {
            string viewName = "IRSIncome" + Request.QueryString["year"] ?? "2013";
            return View(viewName);
        }
        //固定资产投资
        public ActionResult InvestmentInFixedAssets()
        {
            string viewName = "InvestmentInFixedAssets" + Request.QueryString["year"];
            return View(viewName);
        }

        //工业分行业
        public ActionResult IndustrialSubSectorsIndicators()
        {
            string viewName = "IndustrialSubSectorsIndicators" + Request.QueryString["year"] ?? "2013";
            return View(viewName);
        }

        //工业指标
        public ActionResult IndustrialIndicators()
        {
            string viewName = "IndustrialIndicators" + Request.QueryString["year"] ?? "2013";
            return View(viewName);
        }
        //批发
        public ActionResult WholesaleBusiness()
        {
            string viewName = "WholesaleBusiness" + Request.QueryString["year"] ?? "2013";
            return View(viewName);
        }
        //零售
        public ActionResult RetailBusiness()
        {
            string viewName = "RetailBusiness" + Request.QueryString["year"] ?? "2013";
            return View(viewName);
        }
        //住宿
        public ActionResult AccommodationIndustry()
        {
            string viewName = "AccommodationIndustry" + Request.QueryString["year"] ?? "2013";
            return View(viewName);
        }

        //餐饮行业
        public ActionResult CateringIndustry()
        {
            return View();
        }
        //建筑行业
        public ActionResult BuildingIndustry()
        {
            return View();
        }
    }
}
