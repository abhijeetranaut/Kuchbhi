using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;
using RxWeb.Core.Data;
using PaytmApp.BoundedContext.SqlContext;
using Microsoft.Data.SqlClient;
using PaytmApp.Models.ViewModels;

namespace PaytmApp.Domain.ShoppingModule
{
    public class CartDomain : ICartDomain
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public CartDomain(IShoppingUow uow, IDbContextManager<MainSqlDbContext> dbContextManager) {
            this.Uow = uow;
            DbContextManager = dbContextManager;
        }

        public Task<object> GetAsync(Cart parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetBy(Cart parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(Cart entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Cart entity)
        {
            await DbContextManager.BeginTransactionAsync();
            var spParameters = new SqlParameter[4];

            spParameters[0] = new SqlParameter() { ParameterName = "FashionProductId", Value = entity.FashionProductId };
            spParameters[1] = new SqlParameter() { ParameterName = "PaytmUserId", Value = entity.PaytmUserId };
            spParameters[2] = new SqlParameter() { ParameterName = "ProductQuantity", Value = entity.ProductQuantity };
            spParameters[3] = new SqlParameter() { ParameterName = "TotalAmount", Value = entity.TotalAmount };

            await DbContextManager.StoreProc<StoreProcResult>("[dbo].spCart", spParameters);
            try
            {
                await DbContextManager.CommitAsync();
            }
            catch
            {
                DbContextManager.RollbackTransaction();
            }
        }

        public HashSet<string> UpdateValidation(Cart entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Cart entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(Cart parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Cart parameters)
        {
            throw new NotImplementedException();
        }

        public IShoppingUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface ICartDomain : ICoreDomain<Cart, Cart> { }
}
