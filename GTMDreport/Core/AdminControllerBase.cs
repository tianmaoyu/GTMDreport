using XTSoft.ViewModel;

namespace System.Web.Mvc
{
    public abstract class AdminControllerBase : ManageControllerBase
    {
        protected override bool IsAuthenticated
        {
            get { return HttpContext.User.Identity.IsAuthenticated && this.User.IsAdmin; }
        }

        public override void OnActionExecuting(LoginUserBaseViewModel user, ActionExecutingContext filterContext)
        {

        }
    }
}