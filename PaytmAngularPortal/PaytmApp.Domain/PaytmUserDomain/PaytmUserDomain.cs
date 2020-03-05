using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.PaytmUserModule
{
    public class PaytmUserDomain : IPaytmUserDomain
    {
        public PaytmUserDomain(IPaytmUserUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(PaytmUser parameters)
        {
            throw new NotImplementedException();
        }

        public async Task<object> GetBy(PaytmUser parameters)
        {   
            var count = Uow.Repository<PaytmUser>().Count(t => t.MobileNumber == parameters.MobileNumber && t.Password==parameters.Password);
            if (count!=0)
            {
                return await Task.FromResult("Successfull Login");
            }
            else
            {
                return await Task.FromResult("Try Again Please");
            }
        }
        

        public HashSet<string> AddValidation(PaytmUser entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(PaytmUser entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(PaytmUser entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(PaytmUser entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(PaytmUser parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(PaytmUser parameters)
        {
            throw new NotImplementedException();
        }

        public IPaytmUserUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IPaytmUserDomain : ICoreDomain<PaytmUser, PaytmUser> { }
}
