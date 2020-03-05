using RxWeb.Core.Data;
using PaytmApp.BoundedContext.Main;

namespace PaytmApp.UnitOfWork.Main
{
    public class TransactionUow : BaseUow, ITransactionUow
    {
        public TransactionUow(ITransactionContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface ITransactionUow : ICoreUnitOfWork { }
}


