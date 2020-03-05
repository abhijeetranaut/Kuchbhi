using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.FlightModule
{
    public class FlightDomain : IFlightDomain
    {
        public FlightDomain(IFlightUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(Flight parameters)
        {
            return await Uow.Repository<Flight>().AllAsync();
        }

        public async Task<object> GetBy(Flight parameters)
        {
            return await Uow.Repository<Flight>().FindByAsync(t => t.FlightId == parameters.FlightId);
        }
        

        public HashSet<string> AddValidation(Flight entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Flight entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(Flight entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Flight entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(Flight parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Flight parameters)
        {
            throw new NotImplementedException();
        }

        public IFlightUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IFlightDomain : ICoreDomain<Flight, Flight> { }
}
