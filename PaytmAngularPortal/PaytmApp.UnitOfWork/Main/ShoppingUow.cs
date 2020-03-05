using RxWeb.Core.Data;
using PaytmApp.BoundedContext.Main;

namespace PaytmApp.UnitOfWork.Main
{
    public class ShoppingUow : BaseUow, IShoppingUow
    {
        public ShoppingUow(IShoppingContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IShoppingUow : ICoreUnitOfWork { }
}


