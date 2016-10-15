using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GTMDReport2.Controllers
{
    public class IndustryClassifcationTController : Controller
    {
        // GET: IndustryClassifcationT
        public ActionResult Index()
        {
            return View();
        }

        public JObject GetPagerInfo(JObject pagerParas)
        {
           
            return new JObject();
        }
        // GET: IndustryClassifcationT/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: IndustryClassifcationT/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: IndustryClassifcationT/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: IndustryClassifcationT/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: IndustryClassifcationT/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: IndustryClassifcationT/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: IndustryClassifcationT/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
