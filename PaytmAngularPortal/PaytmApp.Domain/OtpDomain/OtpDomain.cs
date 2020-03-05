using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.OtpModule
{
    public class OtpDomain : IOtpDomain
    {
        public OtpDomain(IOtpUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(OTP parameters)
        {
            var temp = 0;
            temp = Uow.Repository<OTP>().Count(t => t.OTPId == parameters.OTPId && t.OtpNumber == parameters.OtpNumber);
            if(temp!=0)
            {

                return await Task.FromResult("Successfull Verified");
            }
            else
            {
                return await Task.FromResult("Enter correct otp");
            }
        }

        public async Task<object> GetBy(OTP parameters)
        {
            Random rand = new Random();
            parameters.OtpNumber = rand.Next(1000, 9999);
            parameters.ActivateTime = System.DateTime.Now;
            parameters.DeactivateTime =parameters.ActivateTime.AddMinutes(2) ;
            await Uow.RegisterNewAsync(parameters);
            await Uow.CommitAsync();                    
            return await Task.FromResult(parameters.OTPId);
        }        
        public HashSet<string> AddValidation(OTP entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(OTP entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(OTP entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(OTP entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(OTP parameters)
        {
            return ValidationMessages;
        }

        public async Task DeleteAsync( OTP parameters)
        {
            var currenttime= System.DateTime.Now;
            if (parameters.DeactivateTime<currenttime)
            {
                var deactivateotp = Uow.Repository<OTP>().FindByKey(parameters.OTPId);
                await Uow.RegisterDeletedAsync(deactivateotp);
                await Uow.CommitAsync();
            }
        }

        public IOtpUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IOtpDomain : ICoreDomain<OTP,OTP> { }
}
