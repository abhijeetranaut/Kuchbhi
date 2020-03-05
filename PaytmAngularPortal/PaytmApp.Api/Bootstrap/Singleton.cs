using Microsoft.Extensions.DependencyInjection;
using PaytmApp.Infrastructure.Singleton;
using PaytmApp.BoundedContext.Singleton;
using RxWeb.Core.Data;

namespace PaytmApp.Api.Bootstrap
{
    public static class Singleton
    {
        public static void AddSingletonService(this IServiceCollection serviceCollection)
        {
            #region Singleton
            serviceCollection.AddSingleton<ITenantDbConnectionInfo, TenantDbConnectionInfo>();
            serviceCollection.AddSingleton(typeof(UserAccessConfigInfo));
            #endregion Singleton
        }

    }
}




