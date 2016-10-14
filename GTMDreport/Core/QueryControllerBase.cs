using XTSoft.Services;
using XTSoft.Util.Pager;

namespace System.Web.Mvc
{
    public abstract class QueryControllerBase<TViewModel, TFindAnyParameters> : ManageControllerBase
        where TViewModel : class,new()
        where TFindAnyParameters :class, IPagination
    {
        /// <summary>
        /// 表示一个基础服务。
        /// </summary>
        private IServiceBase<TViewModel, TFindAnyParameters> ServiceBase { get; set; }

        /// <summary>
        /// 初始化查询控制器。
        /// </summary>
        /// <param name="serviceBase">表示一个基础服务。</param>
        protected QueryControllerBase(IServiceBase<TViewModel, TFindAnyParameters> serviceBase)
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