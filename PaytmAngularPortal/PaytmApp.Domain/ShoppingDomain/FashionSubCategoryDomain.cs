using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.ShoppingModule
{
    public class FashionSubCategoryDomain : IFashionSubCategoryDomain
    {
        public FashionSubCategoryDomain(IShoppingUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(FashionSubCategory parameters)
        {
            return await Uow.Repository<FashionSubCategory>().AllAsync();
        }

        public  async Task<object> GetBy(FashionSubCategory parameters)
        {
            return await Uow.Repository<FashionSubCategory>().FindByAsync(t => t.FashionCategoryId == parameters.FashionCategoryId);
        }
        

        public HashSet<string> AddValidation(FashionSubCategory entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(FashionSubCategory entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(FashionSubCategory entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(FashionSubCategory entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(FashionSubCategory parameters)
        {
            return ValidationMessages;
        }

        public async Task DeleteAsync(FashionSubCategory parameters)
        {
            var FashionSubCategory = Uow.Repository<FashionSubCategory>().FindByKey(parameters.FashionSubCategoryId);
            await Uow.RegisterDeletedAsync(FashionSubCategory);
            await Uow.CommitAsync();
        }

        public IShoppingUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IFashionSubCategoryDomain : ICoreDomain<FashionSubCategory, FashionSubCategory> { }
}
