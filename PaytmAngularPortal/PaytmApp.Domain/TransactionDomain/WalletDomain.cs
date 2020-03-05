using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.TransactionModule
{
    public class WalletDomain : IWalletDomain
    {
        public WalletDomain(ITransactionUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(Wallet parameters)
        {
            throw new NotImplementedException();
        }

        public async Task<object> GetBy(Wallet parameters)
        {
            return await Uow.Repository<Wallet>().FindByAsync(t => t.PaytmUserId == parameters.PaytmUserId);
        }
        

        public HashSet<string> AddValidation(Wallet entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Wallet entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(Wallet entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Wallet entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(Wallet parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Wallet parameters)
        {
            throw new NotImplementedException();
        }

        public ITransactionUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IWalletDomain : ICoreDomain<Wallet, Wallet> { }
}
