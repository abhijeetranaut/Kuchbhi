using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;
using PaytmApp.BoundedContext.SqlContext;
using RxWeb.Core.Data;
using Microsoft.Data.SqlClient;
using PaytmApp.Models.ViewModels;

namespace PaytmApp.Domain.TransactionModule
{
    public class TransactionDomain : ITransactionDomain
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public TransactionDomain(ITransactionUow uow, IDbContextManager<MainSqlDbContext> dbContextManager) {
            this.Uow = uow;
            DbContextManager = dbContextManager;
        }

        public Task<object> GetAsync(Transaction parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetBy(Transaction parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(Transaction entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Transaction entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(Transaction entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Transaction entity)
        {
            await DbContextManager.BeginTransactionAsync();
            var spParameters = new SqlParameter[6];
            spParameters[0] = new SqlParameter() { ParameterName = "ApplicationObjectId", Value = entity.ApplicationObjectId };
            spParameters[1] = new SqlParameter() { ParameterName = "TransactionDate", Value = entity.TransactionDate };
            spParameters[2] = new SqlParameter() { ParameterName = "PaytmUserId", Value = entity.PaytmUserId };
            spParameters[3] = new SqlParameter() { ParameterName = "ReceiverId", Value = entity.ReceiverId };
            //spParameters[4] = new SqlParameter() { ParameterName = "WalletId", Value = entity.WalletId };            
            //spParameters[5] = new SqlParameter() { ParameterName = "Amount", Value = entity.Amount };

            await DbContextManager.StoreProc<StoreProcResult>("[dbo].spWalletTransactionDetail", spParameters);
            try
            {
                await DbContextManager.CommitAsync();
            }
            catch
            {
                DbContextManager.RollbackTransaction();
            }
        }

        public HashSet<string> DeleteValidation(Transaction  parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Transaction parameters)
        {
            throw new NotImplementedException();
        }

        public ITransactionUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface ITransactionDomain : ICoreDomain<Transaction, Transaction> { }
}
