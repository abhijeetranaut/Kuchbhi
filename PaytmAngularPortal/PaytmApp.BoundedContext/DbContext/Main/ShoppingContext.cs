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
    public class ShoppingContext : BaseBoundedContext, IShoppingContext
    {
        public ShoppingContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
            		public DbSet<Cart> Cart { get; set; }
		public DbSet<FashionCategory> FashionCategory { get; set; }
		public DbSet<FashionProduct> FashionProduct { get; set; }
		public DbSet<FashionSubCategory> FashionSubCategory { get; set; }
		public DbSet<Seller> Seller { get; set; }
		public DbSet<SellerProduct> SellerProduct { get; set; }
		public DbSet<vCartItem> vCartItem { get; set; }
            		public DbSet<vFashionProduct> vFashionProducts { get; set; }
            #endregion DbSets



    }


    public interface IShoppingContext : IDbContext
    {
    }
}

