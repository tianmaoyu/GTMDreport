using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace GTMDReport2
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                 defaults: new { controller = "Account", action = "LoginCustomer", id = UrlParameter.Optional }
                 //defaults: new { controller = "Menu", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
