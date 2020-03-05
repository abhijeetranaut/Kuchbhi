using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;
using RxWeb.Core.Data;
using PaytmApp.BoundedContext.SqlContext;
using Microsoft.Data.SqlClient;
using PaytmApp.Models.ViewModels;

namespace PaytmApp.Domain.TransactionModule
{
    public class BankCardDetailDomain : IBankCardDetailDomain
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }

        public BankCardDetailDomain(ITransactionUow uow, IDbContextManager<MainSqlDbContext> dbContextManager) {
            this.Uow = uow;
            DbContextManager = dbContextManager;
        }

        public Task<object> GetAsync(BankCardDetail parameters)
        {
            throw new NotImplementedException();
        }

        public async Task<object> GetBy(BankCardDetail parameters)
        {
            //return await Uow.Repository<BankCardDetail>().FindByAsync(t => t.PaytmUserId == parameters.PaytmUserId);
             throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(BankCardDetail entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(BankCardDetail entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(BankCardDetail entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(BankCardDetail entity)
        {
            await DbContextManager.BeginTransactionAsync();
            var spParameters = new SqlParameter[7];
            //spParameters[0] = new SqlParameter() { ParameterName = "PaytmUserId", Value = entity.PaytmUserId };
            spParameters[1] = new SqlParameter() { ParameterName = "CardNumber", Value = entity.CardNumber };         
            spParameters[2] = new SqlParameter() { ParameterName = "CardName", Value = entity.CardName };
            spParameters[3] = new SqlParameter() { ParameterName = "CardCVV", Value = entity.CardCVV };
            spParameters[4] = new SqlParameter() { ParameterName = "CardType", Value = entity.CardType };
            spParameters[5] = new SqlParameter() { ParameterName = "CardExpiryDate", Value = entity.CardExpiryDate };
            //spParameters[6] = new SqlParameter() { ParameterName = "Amount", Value = entity.Amount };

            await DbContextManager.StoreProc<StoreProcResult>("[dbo].spBankTransactionDetail", spParameters);
            try
            {
                await DbContextManager.CommitAsync();
            }
            catch
            {
                DbContextManager.RollbackTransaction();
            }
        }

        public HashSet<string> DeleteValidation(BankCardDetail parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(BankCardDetail parameters)
        {
            throw new NotImplementedException();
        }
                
        public ITransactionUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IBankCardDetailDomain : ICoreDomain<BankCardDetail, BankCardDetail> { }
}
