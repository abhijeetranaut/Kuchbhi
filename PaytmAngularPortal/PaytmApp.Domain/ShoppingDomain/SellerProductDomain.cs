using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.ShoppingModule
{
    public class SellerProductDomain : ISellerProductDomain
    {
        public SellerProductDomain(IShoppingUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(SellerProduct parameters)
        {
            return await Uow.Repository<SellerProduct>().AllAsync();
        }

        public async Task<object> GetBy(SellerProduct parameters)
        {
            return await Uow.Repository<SellerProduct>().FindByAsync(t => t.SellerProductId == parameters.SellerProductId);
        }
        

        public HashSet<string> AddValidation(SellerProduct entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(SellerProduct entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(SellerProduct entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(SellerProduct entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(SellerProduct parameters)
        {
            return ValidationMessages;
        }

        public async Task DeleteAsync(SellerProduct parameters)
        {
            var SellerProduct = Uow.Repository<SellerProduct>().FindByKey(parameters.SellerProductId);
            await Uow.RegisterDeletedAsync(SellerProduct);
            await Uow.CommitAsync();
        }

        public IShoppingUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface ISellerProductDomain : ICoreDomain<SellerProduct, SellerProduct> { }
}
