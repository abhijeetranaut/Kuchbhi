using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.ShoppingModule
{
    public class SellerDomain : ISellerDomain
    {
        public SellerDomain(IShoppingUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(Seller parameters)
        {
            return await Uow.Repository<Seller>().AllAsync();
        }

        public async Task<object> GetBy(Seller parameters)
        {
            return await Uow.Repository<Seller>().FindByAsync(t => t.SellerId == parameters.SellerId);
        }
        

        public HashSet<string> AddValidation(Seller entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Seller entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(Seller entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Seller entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(Seller parameters)
        {
            return ValidationMessages;
        }

        public async Task DeleteAsync(Seller parameters)
        {
            var Seller = Uow.Repository<Seller>().FindBy(t => t.SellerId == parameters.SellerId);
            await Uow.RegisterDeletedAsync(Seller);
            await Uow.CommitAsync();
        }

        public IShoppingUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface ISellerDomain : ICoreDomain<Seller, Seller> { }
}
