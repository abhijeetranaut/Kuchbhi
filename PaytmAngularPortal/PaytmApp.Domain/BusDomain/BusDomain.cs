using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.BusModule
{
    public class BusDomain : IBusDomain
    {
        public BusDomain(IBusUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(Bus parameters)
        {
            return await Uow.Repository<Bus>().AllAsync();
        }

        public async Task<object> GetBy(Bus parameters)
        {
            return await Uow.Repository<Bus>().FindByAsync(t => t.BusId == parameters.BusId);
        }
        

        public HashSet<string> AddValidation(Bus entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Bus entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(Bus entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Bus entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(Bus parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Bus parameters)
        {
            throw new NotImplementedException();
        }

        public IBusUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IBusDomain : ICoreDomain<Bus, Bus> { }
}
