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
    public class TransactionContext : BaseBoundedContext, ITransactionContext
    {
        public TransactionContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
            		public DbSet<Transaction> Transaction { get; set; }
		public DbSet<Wallet> Wallet { get; set; }
		public DbSet<BankCardDetail> BankCardDetail { get; set; }
		public DbSet<Bank> Bank { get; set; }
            #endregion DbSets


    }


    public interface ITransactionContext : IDbContext
    {
    }
}

