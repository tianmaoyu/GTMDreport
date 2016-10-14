using XTSoft.Util.Web;
using XTSoft.ViewModel;

namespace System.Web.Mvc
{
    public abstract class ServiceViewPageBase : ServiceWebViewPageBase<LoginUserBaseViewModel> { }

    public abstract class ServiceViewPageBase<TModel> : ServiceWebViewPageBase<LoginUserBaseViewModel, TModel> { }
}