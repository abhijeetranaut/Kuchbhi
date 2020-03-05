using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.UserDetailModule
{
    public class UserDetailDomain : IUserDetailDomain
    {
        public UserDetailDomain(IUserDetailUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(UserDetail parameters)
        {
            return await Uow.Repository<UserDetail>().AllAsync(); 
        }

        public Task<object> GetBy(UserDetail parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(UserDetail entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(UserDetail entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(UserDetail entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(UserDetail entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(UserDetail parameters)
        {
            return ValidationMessages;
        }

        public async Task DeleteAsync(UserDetail parameters)
        {
            var user = Uow.Repository<UserDetail>().FindByKey(parameters.PaytmUserId);
            await Uow.RegisterDeletedAsync(user);
            await Uow.CommitAsync();
        }

        public IUserDetailUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IUserDetailDomain : ICoreDomain<UserDetail, UserDetail> { }
}
