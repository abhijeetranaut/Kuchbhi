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
    public class FlightContext : BaseBoundedContext, IFlightContext
    {
        public FlightContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
            		public DbSet<Flight> Flight { get; set; }
		public DbSet<FlightBooking> FlightBooking { get; set; }
		public DbSet<FlightAvailableSeat> FlightAvailableSeat { get; set; }
		public DbSet<FlightTravellerDetail> FlightTravellerDetail { get; set; }
            #endregion DbSets


    }


    public interface IFlightContext : IDbContext
    {
    }
}

