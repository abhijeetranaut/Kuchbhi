using RxWeb.Core.Data;
using PaytmApp.BoundedContext.Main;

namespace PaytmApp.UnitOfWork.Main
{
    public class BookingMasterUow : BaseUow, IBookingMasterUow
    {
        public BookingMasterUow(IBookingMasterContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IBookingMasterUow : ICoreUnitOfWork { }
}


