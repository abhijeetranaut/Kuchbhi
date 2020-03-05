using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.Module
{
    public class KycDomain : IKycDomain
    {
        public KycDomain(IKycUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(Kyc parameters)
        {
            throw new NotImplementedException();
        }

        public async Task<object> GetBy(Kyc parameters)
        {
            AadharDetail AadharDetail = new AadharDetail();
            var temp =await Uow.Repository<AadharDetail>().SingleOrDefaultAsync(t => t.AadharNumber == parameters.UAadharNumber);
            if (temp != null)
            {
                
                Random rand = new Random();
               
                parameters.UAadharNumber = parameters.UAadharNumber;
                parameters.KycVerifyNumber = rand.Next(1000, 9999);
                //parameters.KycStatus = true;
                await Uow.RegisterNewAsync(parameters);
                await Uow.CommitAsync();
                return await Task.FromResult(parameters.KycId);
            }
            else
            {
                return await Task.FromResult("not found");
            }
        }
        

        public HashSet<string> AddValidation(Kyc entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Kyc entity)
        {

            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();

        }

        public HashSet<string> UpdateValidation(Kyc entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Kyc entity)
        {
            var temp = Uow.Repository<Kyc>().Count(t => t.KycId == entity.KycId && t.KycVerifyNumber == entity.KycVerifyNumber);
            if (temp!=0)
            {   

                entity.KycStatus = true;
                await Uow.RegisterDirtyAsync(entity);
                await Uow.CommitAsync();
                

            }
            else
            {
                entity.KycStatus = false;
                await Uow.RegisterDirtyAsync(entity);
                await Uow.CommitAsync();
            }

        }

        public HashSet<string> DeleteValidation(Kyc parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Kyc parameters)
        {
            throw new NotImplementedException();
        }

        public IKycUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IKycDomain : ICoreDomain<Kyc, Kyc> { }
}
