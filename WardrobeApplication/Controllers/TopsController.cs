﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using WardrobeApplication.Models;

namespace WardrobeApplication.Controllers
{
    public class TopsController : Controller
    {
        private WardrobeDBEntities db = new WardrobeDBEntities();

        // GET: Tops
        public ActionResult Index()
        {
            var tops = db.Tops.Include(t => t.Occasion).Include(t => t.Season);
            return View(tops.ToList());
        }

        // GET: Tops/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Top top = db.Tops.Find(id);
            if (top == null)
            {
                return HttpNotFound();
            }
            return View(top);
        }

        // GET: Tops/Create
        public ActionResult Create()
        {
            ViewBag.OccasionID = new SelectList(db.Occasions, "OccasionID", "OccasionName");
            ViewBag.SeasonID = new SelectList(db.Seasons, "SeasonID", "SeasonName");
            return View();
        }

        // POST: Tops/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "TopID,TopName,TopPhoto,TopColor,TopType,SeasonID,OccasionID")] Top top)
        {
            if (ModelState.IsValid)
            {
                db.Tops.Add(top);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.OccasionID = new SelectList(db.Occasions, "OccasionID", "OccasionName", top.OccasionID);
            ViewBag.SeasonID = new SelectList(db.Seasons, "SeasonID", "SeasonName", top.SeasonID);
            return View(top);
        }

        // GET: Tops/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Top top = db.Tops.Find(id);
            if (top == null)
            {
                return HttpNotFound();
            }
            ViewBag.OccasionID = new SelectList(db.Occasions, "OccasionID", "OccasionName", top.OccasionID);
            ViewBag.SeasonID = new SelectList(db.Seasons, "SeasonID", "SeasonName", top.SeasonID);
            return View(top);
        }

        // POST: Tops/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "TopID,TopName,TopPhoto,TopColor,TopType,SeasonID,OccasionID")] Top top)
        {
            if (ModelState.IsValid)
            {
                db.Entry(top).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.OccasionID = new SelectList(db.Occasions, "OccasionID", "OccasionName", top.OccasionID);
            ViewBag.SeasonID = new SelectList(db.Seasons, "SeasonID", "SeasonName", top.SeasonID);
            return View(top);
        }

        // GET: Tops/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Top top = db.Tops.Find(id);
            if (top == null)
            {
                return HttpNotFound();
            }
            return View(top);
        }

        // POST: Tops/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Top top = db.Tops.Find(id);
            db.Tops.Remove(top);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
