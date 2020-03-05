using RxWeb.Core.Data;
using PaytmApp.BoundedContext.Main;

namespace PaytmApp.UnitOfWork.Main
{
    public class PaytmUserUow : BaseUow, IPaytmUserUow
    {
        public PaytmUserUow(IPaytmUserContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IPaytmUserUow : ICoreUnitOfWork { }
}


