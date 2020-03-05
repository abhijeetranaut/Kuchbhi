using RxWeb.Core.Data;
using PaytmApp.BoundedContext.Main;

namespace PaytmApp.UnitOfWork.Main
{
    public class BusUow : BaseUow, IBusUow
    {
        public BusUow(IBusContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IBusUow : ICoreUnitOfWork { }
}


