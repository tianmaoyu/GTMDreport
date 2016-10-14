using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GTMDReport2.Startup))]
namespace GTMDReport2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
