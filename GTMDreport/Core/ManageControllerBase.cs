using XTSoft.Services;
using System.Linq;
using XTSoft.ViewModel;
using XTSoft.Parameters;
using System.Text;

namespace System.Web.Mvc
{
    /// <summary>
    /// 基控制器
    /// </summary>
    public abstract class ManageControllerBase : XTSoft.Util.EasyUi.EasyUiControllerBase<LoginUserBaseViewModel>
    {
        public virtual ActionResult Index()
        {
           if(Request.IsAjaxRequest())
                return PartialView();
            return View();
        }
        
        protected override bool IsAuthenticated
        {
            get { return HttpContext.User.Identity.IsAuthenticated && !this.User.IsAdmin; }
        }

        protected override string LoginUrl
        {
            get
            {
                return Url.Action("login", "user", new { area = this.RouteData.DataTokens.TryGetValue("area"), returnUrl = Request.GetRequestUrl() });
            }
        }

        protected virtual string HomeUrl
        {
            get { return Url.Action("index", "home", new { area = this.RouteData.DataTokens.TryGetValue("area") }); }
        }

        public override void OnActionExecuting(LoginUserBaseViewModel user, ActionExecutingContext filterContext)
        {
            base.OnActionExecuting(user, filterContext);
        }

        protected override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            base.OnActionExecuted(filterContext);
        }
        
        protected ActionResult OutputJs(string js)
        {
            return Content("<script>{0}</script>".Fmt(js));
        }

        protected ActionResult EmptyAjaxResult()
        {
            return Content("[]");
        }
    }
}
