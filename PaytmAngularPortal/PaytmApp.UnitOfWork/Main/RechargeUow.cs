using RxWeb.Core.Data;
using PaytmApp.BoundedContext.Main;

namespace PaytmApp.UnitOfWork.Main
{
    public class RechargeUow : BaseUow, IRechargeUow
    {
        public RechargeUow(IRechargeContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IRechargeUow : ICoreUnitOfWork { }
}


