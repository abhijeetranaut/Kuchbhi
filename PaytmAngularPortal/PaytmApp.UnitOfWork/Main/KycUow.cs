using RxWeb.Core.Data;
using PaytmApp.BoundedContext.Main;

namespace PaytmApp.UnitOfWork.Main
{
    public class KycUow : BaseUow, IKycUow
    {
        public KycUow(IKycContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IKycUow : ICoreUnitOfWork { }
}


