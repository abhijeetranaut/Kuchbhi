using RxWeb.Core.Data;
using PaytmApp.BoundedContext.Main;

namespace PaytmApp.UnitOfWork.Main
{
    public class OtpUow : BaseUow, IOtpUow
    {
        public OtpUow(IOtpContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IOtpUow : ICoreUnitOfWork { }
}


