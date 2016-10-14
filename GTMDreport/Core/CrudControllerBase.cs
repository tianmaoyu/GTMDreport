using XTSoft.Services;
using XTSoft.Util.Pager;

namespace System.Web.Mvc
{
    /// <summary>
    /// 表示一个 CRUD 控制器。
    /// </summary>
    /// <typeparam name="TViewModel">数据传输对象类型。</typeparam>
    /// <typeparam name="TAddParameters">表示一个参数添加的请求信息。</typeparam>
    /// <typeparam name="TEditParameters">表示一个参数修改的请求信息。</typeparam>
    public abstract partial class CrudControllerBase<TViewModel, TAddParameters, TEditParameters> : ManageControllerBase
        where TViewModel : class,new()
        where TAddParameters : class,new()
        where TEditParameters : class,new()
    {
        /// <summary>
        /// 表示一个基础服务。
        /// </summary>
        protected IServiceBase<TViewModel, TAddParameters, TEditParameters> ServiceBase { get; set; }

        /// <summary>
        /// 初始化 CRUD 控制器。
        /// </summary>
        /// <param name="serviceBase">表示一个基础服务。</param>
        protected CrudControllerBase(IServiceBase<TViewModel, TAddParameters, TEditParameters> serviceBase)
        {
            this.ServiceBase = serviceBase;
        }

        public virtual ActionResult Add()
        {
            return PartialView();
        }

        [HttpPost, ValidateInput(false), ValidateAntiForgeryToken]
        public virtual ActionResult Add(TAddParameters ps)
        {
            return this.Add(ps, null);
        }

        [NonAction]
        protected ActionResult Add(TAddParameters ps, Action<TAddParameters> action)
        {
            if(!ModelState.IsValid) return JsonMessage(false, this.GetFirstError());
            if(action != null) action(ps);
            var result = this.ServiceBase.Add(ps);
            return JsonResult(result);
        }

        public virtual ActionResult Edit(long? id)
        {
            var result = this.ServiceBase.FindOne(id.SafeValue());
            if(result.IsSucceed) return PartialView(result.Value.CopyTo<TEditParameters>());
            return PartialView();
        }

        [HttpPost, ValidateInput(false), ValidateAntiForgeryToken]
        public virtual ActionResult Edit(TEditParameters ps)
        {
            return this.Edit(ps, null);
        }

        [NonAction]
        protected ActionResult Edit(TEditParameters ps, Action<TEditParameters> action)
        {
            if(!ModelState.IsValid) return JsonMessage(false, this.GetFirstError());
            if(action != null) action(ps);
            var result = this.ServiceBase.Edit(ps);
            return JsonResult(result);
        }

        [HttpPost, ValidateInput(false)]
        public virtual ActionResult Remove(params long[] idList)
        {
            var result = this.ServiceBase.Remove(idList);
            return JsonResult(result);
        }
    }

    /// <summary>
    /// 表示一个 CRUD 控制器。
    /// </summary>
    /// <typeparam name="TViewModel">数据传输对象类型。</typeparam>
    /// <typeparam name="TAddParameters">表示一个参数添加的请求信息。</typeparam>
    /// <typeparam name="TEditParameters">表示一个参数修改的请求信息。</typeparam>
    /// <typeparam name="TFindAnyParameters">表示一个参数查询的请求信息，继承自 PgParameters 类。</typeparam>
    public abstract partial class CrudControllerBase<TViewModel, TAddParameters, TEditParameters, TFindAnyParameters> : CrudControllerBase<TViewModel, TAddParameters, TEditParameters>
        where TViewModel : class,new()
        where TAddParameters : class,new()
        where TEditParameters : class,new()
        where TFindAnyParameters : class, IPagination
    {
        /// <summary>
        /// 表示一个基础服务。
        /// </summary>
        private new IServiceBase<TViewModel, TAddParameters, TEditParameters, TFindAnyParameters> ServiceBase { get; set; }

        /// <summary>
        /// 初始化 CRUD 控制器。
        /// </summary>
        /// <param name="serviceBase">表示一个基础服务。</param>
        protected CrudControllerBase(IServiceBase<TViewModel, TAddParameters, TEditParameters, TFindAnyParameters> serviceBase)
            : base(serviceBase)
        {
            this.ServiceBase = serviceBase;
        }

        [HttpPost, ValidateInput(false)]
        public virtual ActionResult Query(TFindAnyParameters ps)
        {
            var list = this.ServiceBase.FindAny(ps);
            return ToDataGridResult(list);
        }
    }
}