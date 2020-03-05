#region Namespace
using Microsoft.Extensions.DependencyInjection;
using PaytmApp.Infrastructure.Security;
using RxWeb.Core.Data;
using RxWeb.Core.Security;
using RxWeb.Core.Annotations;
using RxWeb.Core;
using PaytmApp.UnitOfWork.DbEntityAudit;
using PaytmApp.BoundedContext.Main;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Domain.OtpModule;

using PaytmApp.Domain.UserDetailModule;
  
           
            using PaytmApp.Domain.PaytmUserModule;
            
            using PaytmApp.Domain.Module;
            using PaytmApp.Domain.FlightModule;
            using PaytmApp.Domain.BusModule;
            using PaytmApp.Domain.MovieModule;
            using PaytmApp.Domain.ShoppingModule;
            using PaytmApp.Domain.TransactionModule;
            using PaytmApp.Domain.RechargeModule;
            #endregion Namespace

























namespace PaytmApp.Api.Bootstrap
{
    public static class ScopedExtension
    {

        public static void AddScopedService(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IRepositoryProvider, RepositoryProvider>();
            serviceCollection.AddScoped<ITokenAuthorizer, TokenAuthorizer>();
            serviceCollection.AddScoped<IModelValidation, ModelValidation>();
            serviceCollection.AddScoped<IAuditLog, AuditLog>();
            serviceCollection.AddScoped<IApplicationTokenProvider, ApplicationTokenProvider>();
            serviceCollection.AddScoped(typeof(IDbContextManager<>), typeof(DbContextManager<>));

            #region ContextService

            serviceCollection.AddScoped<ILoginContext, LoginContext>();
            serviceCollection.AddScoped<ILoginUow, LoginUow>();
                      
                        serviceCollection.AddScoped<IOtpContext, OtpContext>();
            serviceCollection.AddScoped<IOtpUow, OtpUow>();
                     
                        serviceCollection.AddScoped<IUserDetailContext, UserDetailContext>();
            serviceCollection.AddScoped<IUserDetailUow, UserDetailUow>();
                        serviceCollection.AddScoped<IUserDetailContext, UserDetailContext>();
           
                       
                       
                       
                        serviceCollection.AddScoped<IUserContext, UserContext>();
            serviceCollection.AddScoped<IUserUow, UserUow>();
                       
                        
                        
                        serviceCollection.AddScoped<IPaytmUserContext, PaytmUserContext>();
            serviceCollection.AddScoped<IPaytmUserUow, PaytmUserUow>();
                        serviceCollection.AddScoped<IKycContext, KycContext>();
            serviceCollection.AddScoped<IKycUow, KycUow>();
                        serviceCollection.AddScoped<IFlightContext, FlightContext>();
            serviceCollection.AddScoped<IFlightUow, FlightUow>();
                        serviceCollection.AddScoped<IBusContext, BusContext>();
            serviceCollection.AddScoped<IBusUow, BusUow>();
                        serviceCollection.AddScoped<IMovieContext, MovieContext>();
            serviceCollection.AddScoped<IMovieUow, MovieUow>();
                        serviceCollection.AddScoped<IBookingMasterContext, BookingMasterContext>();
            serviceCollection.AddScoped<IBookingMasterUow, BookingMasterUow>();
                        serviceCollection.AddScoped<IShoppingContext, ShoppingContext>();
            serviceCollection.AddScoped<IShoppingUow, ShoppingUow>();
                        serviceCollection.AddScoped<ITransactionContext, TransactionContext>();
            serviceCollection.AddScoped<ITransactionUow, TransactionUow>();
                        serviceCollection.AddScoped<IRechargeContext, RechargeContext>();
            serviceCollection.AddScoped<IRechargeUow, RechargeUow>();
            #endregion ContextService




            #region DomainService

            
           
            
            serviceCollection.AddScoped<IOtpDomain, OtpDomain>();
            
            
            
          
            
            serviceCollection.AddScoped<IUserDetailDomain, UserDetailDomain>();
            
            serviceCollection.AddScoped<IUserDetailDomain, UserDetailDomain>();
            
                
            
          
            
                    
                    
           
            
            
            
           
            
            
            
            
            serviceCollection.AddScoped<IPaytmUserDomain, PaytmUserDomain>();
            
           
            
            serviceCollection.AddScoped<IKycDomain, KycDomain>();
            
            serviceCollection.AddScoped<IFlightDomain, FlightDomain>();
            
            serviceCollection.AddScoped<IBusDomain, BusDomain>();
            
            serviceCollection.AddScoped<IMovieDomain, MovieDomain>();
            
            serviceCollection.AddScoped<ICartDomain, CartDomain>();
            
            serviceCollection.AddScoped<IFashionCategoryDomain, FashionCategoryDomain>();
            
            serviceCollection.AddScoped<IFashionProductDomain, FashionProductDomain>();
            
            serviceCollection.AddScoped<IFashionSubCategoryDomain, FashionSubCategoryDomain>();
            
            serviceCollection.AddScoped<ISellerDomain, SellerDomain>();
            
            serviceCollection.AddScoped<ISellerProductDomain, SellerProductDomain>();
            
            serviceCollection.AddScoped<IvCartItemDomain, vCartItemDomain>();
            
            serviceCollection.AddScoped<IWalletDomain, WalletDomain>();
            
            serviceCollection.AddScoped<IBankCardDetailDomain, BankCardDetailDomain>();
            
            serviceCollection.AddScoped<ITransactionDomain, TransactionDomain>();
            
            serviceCollection.AddScoped<IRechargeDomain, RechargeDomain>();
            
            serviceCollection.AddScoped<IvFashionProductDomain, vFashionProductDomain>();
            #endregion DomainService





        }
    }
}




