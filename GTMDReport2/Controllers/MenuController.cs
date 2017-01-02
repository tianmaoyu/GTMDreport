using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GTMDReport2.Controllers
{
    public class MenuController : Controller
    {
        //主菜单
        public ActionResult Index(string str)
        {
            return View();
        }
        // GET: Menu
        public ActionResult Desktop(string str)
        {
            return View();
        }

        // GET: Menu/Details/5
        public ActionResult Chart(string str)
        {
            return View();
        }

        // GET: Menu/Create
        public ActionResult DataInput()
        {
            return View();
        }
    }
}
