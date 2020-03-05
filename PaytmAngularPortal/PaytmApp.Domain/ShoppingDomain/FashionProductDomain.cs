using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.ShoppingModule
{
    public class FashionProductDomain : IFashionProductDomain
    {
        public FashionProductDomain(IShoppingUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(FashionProduct parameters)
        {
            return await Uow.Repository<FashionProduct>().AllAsync();
        }

        public async Task<object> GetBy(FashionProduct parameters)
        {
            return await Uow.Repository<FashionProduct>().FindByAsync(t => t.FashionProductId == parameters.FashionProductId);
        }
        

        public HashSet<string> AddValidation(FashionProduct entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(FashionProduct entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(FashionProduct entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(FashionProduct entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(FashionProduct parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(FashionProduct parameters)
        {
            throw new NotImplementedException();
        }

        public IShoppingUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IFashionProductDomain : ICoreDomain<FashionProduct, FashionProduct> { }
}
