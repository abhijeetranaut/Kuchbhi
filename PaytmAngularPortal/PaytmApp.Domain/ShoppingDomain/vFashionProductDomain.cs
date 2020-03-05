using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.ShoppingModule
{
    
    public class vFashionProductDomain : IvFashionProductDomain
    {
        public vFashionProductDomain(IShoppingUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(vFashionProduct parameters)
        {
            throw new NotImplementedException();
        }

        public async Task<object> GetBy(vFashionProduct parameters)
        {
            return await Uow.Repository<vFashionProduct>().FindByAsync(t => t.FashionSubCategoryId == parameters.FashionSubCategoryId);
        }
        

        public HashSet<string> AddValidation(vFashionProduct entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(vFashionProduct entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(vFashionProduct entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(vFashionProduct entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(vFashionProduct parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(vFashionProduct parameters)
        {
            throw new NotImplementedException();
        }

        public IShoppingUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IvFashionProductDomain : ICoreDomain<vFashionProduct, vFashionProduct> { }
}
