﻿using EntityFramework.Extensions;

using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace GTMDReport2.DAL
{
    public class DbContextBase: DbContext, IDisposable
    {
        public DbContextBase(string entityConnectionString) : base(entityConnectionString)
        {

        }
        public void Delete<T>(T entity) where T : class
        {
            Entry<T>(entity).State = EntityState.Deleted;
            SaveChanges();
        }

        public List<T> FildAll<T>(Expression<Func<T, bool>> conditions = null) where T : class
        {
            if (conditions == null)
                return Set<T>().ToList();
            else
                return Set<T>().Where(conditions).ToList();
        }

        public T Find<T>(params object[] keyValues) where T : class
        {
            return Set<T>().Find(keyValues);
        }

        public T Insert<T>(T entity) where T : class
        {
            Set<T>().Add(entity);
            SaveChanges();
            return entity;
        }

        public bool InsertBluk<T>(IEnumerable<T> entitys) where T : class
        {
            foreach(T entit in entitys)
            {
                Insert<T>(entit);
            }
            return true;
        }
        //
        public bool DeleteBulk<T>(Expression<Func<T, bool>> conditions) where T : class
        {
            Set<T>().Where(conditions).Delete();
            SaveChanges();
            return true;
        }
        public bool Delete<T>(Expression<Func<T, bool>> conditions) where T:class
        {
            var list=  Set<T>().Where(conditions).ToList();
            foreach(T entity in list)
            {
                Delete<T>(entity);
            }
            return true;
        }
        public T Updata<T>(T entity) where T:class
        {
            Set<T>().Attach(entity);
            Entry<T>(entity).State = EntityState.Modified;
            SaveChanges();
            return entity;
        }

    }
}