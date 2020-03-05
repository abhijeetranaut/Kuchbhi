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
    public class MovieContext : BaseBoundedContext, IMovieContext
    {
        public MovieContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
            		public DbSet<Movie> Movie { get; set; }
		public DbSet<MovieHall> MovieHall { get; set; }
		public DbSet<MovieBooking> MovieBooking { get; set; }
		public DbSet<Hall> Hall { get; set; }
		public DbSet<Theatre> Theatre { get; set; }
            #endregion DbSets


    }


    public interface IMovieContext : IDbContext
    {
    }
}

