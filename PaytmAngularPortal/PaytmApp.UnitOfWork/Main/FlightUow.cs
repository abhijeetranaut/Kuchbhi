using RxWeb.Core.Data;
using PaytmApp.BoundedContext.Main;

namespace PaytmApp.UnitOfWork.Main
{
    public class FlightUow : BaseUow, IFlightUow
    {
        public FlightUow(IFlightContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IFlightUow : ICoreUnitOfWork { }
}


