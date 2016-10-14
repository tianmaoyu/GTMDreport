using Autofac;
using XTSoft.Util.Ioc;
using System.Reflection;

namespace GTMDreport
{
    /// <summary>
    /// 表示一个 Autofac 依赖注入及 AOP 拦截的实现。
    /// </summary>
    public class IocConfig : ConfigBase
    {
        private static readonly IocConfig Instance = new IocConfig();

        public static void Register(Assembly assembly)
        {
            IocContainer.RegisterMvc(assembly, Instance);
        }

        /// <summary>
        /// 加载配置。
        /// </summary>
        protected override void Init(ContainerBuilder builder)
        {
            //builder.RegisterType<SmtpEmailSenderConfiguration>().As<ISmtpEmailSenderConfiguration>().SingleInstance();
            //builder.RegisterType<SmtpEmailSender>().As<ISmtpEmailSender>().SingleInstance();
            //builder.RegisterType<DefaultTestService>().As<ITestService>().InstancePerLifetimeScope();
        }
    }
}