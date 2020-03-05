using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.RechargeModule
{
    public class RechargeDomain : IRechargeDomain
    {
        public RechargeDomain(IRechargeUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(Recharge parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetBy(Recharge parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(Recharge entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Recharge entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(Recharge entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Recharge entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(Recharge parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Recharge parameters)
        {
            throw new NotImplementedException();
        }

        public IRechargeUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IRechargeDomain : ICoreDomain<Recharge, Recharge> { }
}
