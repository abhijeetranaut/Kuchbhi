using RxWeb.Core.Data;
using PaytmApp.BoundedContext.Main;

namespace PaytmApp.UnitOfWork.Main
{
    public class UserDetailUow : BaseUow, IUserDetailUow
    {
        public UserDetailUow(IUserDetailContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IUserDetailUow : ICoreUnitOfWork { }
}


