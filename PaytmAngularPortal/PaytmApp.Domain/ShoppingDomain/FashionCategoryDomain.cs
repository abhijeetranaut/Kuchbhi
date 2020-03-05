using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.ShoppingModule
{
    public class FashionCategoryDomain : IFashionCategoryDomain
    {
        public FashionCategoryDomain(IShoppingUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(FashionCategory parameters)
        {
            return await Uow.Repository<FashionCategory>().AllAsync();
        }

        public async Task<object> GetBy(FashionCategory parameters)
        {
            return await Uow.Repository<FashionCategory>().FindByAsync(t => t.FashionCategoryId == parameters.FashionCategoryId);
        }
        

        public HashSet<string> AddValidation(FashionCategory entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(FashionCategory entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(FashionCategory entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(FashionCategory entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(FashionCategory parameters)
        {
            return ValidationMessages;
        }

        public async Task DeleteAsync(FashionCategory parameters)
        {
            var FashionCategory = Uow.Repository<FashionCategory>().FindByKey(parameters.FashionCategoryId);
            await Uow.RegisterDeletedAsync(FashionCategory);
            await Uow.CommitAsync();
        }

        public IShoppingUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IFashionCategoryDomain : ICoreDomain<FashionCategory, FashionCategory> { }
}
