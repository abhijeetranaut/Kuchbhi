using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;
using Microsoft.Data.SqlClient;
using PaytmApp.Models.ViewModels;
using RxWeb.Core.Data;
using PaytmApp.BoundedContext.SqlContext;

namespace PaytmApp.Domain.ShoppingModule
{
    public class vCartItemDomain : IvCartItemDomain
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public vCartItemDomain(IShoppingUow uow, IDbContextManager<MainSqlDbContext> dbContextManager) {
            this.Uow = uow;
            DbContextManager = dbContextManager;
        }

        public async Task<object> GetAsync(vCartItem parameters)
        {
            return await Uow.Repository<vCartItem>().AllAsync();
        }

        public async Task<object> GetBy(vCartItem parameters)
        {
            return await Uow.Repository<vCartItem>().FindByAsync(t => t.PaytmUserId == parameters.PaytmUserId);
        }
        

        public HashSet<string> AddValidation(vCartItem entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(vCartItem entity)
        {
            var spParameters = new SqlParameter[4];
            spParameters[0] = new SqlParameter() { ParameterName = "FashionProductId", Value = entity.FashionProductId };
            spParameters[1] = new SqlParameter() { ParameterName = "PaytmUserId", Value = entity.PaytmUserId };
            spParameters[2] = new SqlParameter() { ParameterName = "ProductQuantity", Value = entity.ProductQuantity };
            spParameters[3] = new SqlParameter() { ParameterName = "TotalAmount", Value = entity.TotalAmount };
            await DbContextManager.StoreProc<StoreProcResult>("[dbo].[spCart]", spParameters);
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(vCartItem entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(vCartItem entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(vCartItem parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(vCartItem parameters)
        {
            throw new NotImplementedException();
        }

        public IShoppingUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IvCartItemDomain : ICoreDomain<vCartItem, vCartItem> { }
}
