using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using PaytmApp.BoundedContext.SqlContext;
using PaytmApp.Models.Main;
using PaytmApp.Models;
using PaytmApp.BoundedContext.Singleton;
using RxWeb.Core.Data;
using RxWeb.Core.Data.Models;
using RxWeb.Core.Data.BoundedContext;

namespace PaytmApp.BoundedContext.Main
{
    public class BusContext : BaseBoundedContext, IBusContext
    {
        public BusContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
            		public DbSet<Bus> Bus { get; set; }
		public DbSet<BusBooking> BusBooking { get; set; }
		public DbSet<BusAvailableSeat> BusAvailableSeat { get; set; }
		public DbSet<BusTravellerDetail> BusTravellerDetail { get; set; }
            #endregion DbSets


    }


    public interface IBusContext : IDbContext
    {
    }
}

