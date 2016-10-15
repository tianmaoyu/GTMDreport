using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GTMDReport2.Controllers
{
    public class IndustryClassificationController : Controller
    {
        // GET: IndustryClassification
        public ActionResult Index()
        {
            return View();
        }

        // GET: IndustryClassification/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        

        // GET: IndustryClassification/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: IndustryClassification/Create
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

        // GET: IndustryClassification/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: IndustryClassification/Edit/5
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

        // GET: IndustryClassification/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: IndustryClassification/Delete/5
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
