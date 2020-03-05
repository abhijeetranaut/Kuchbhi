using RxWeb.Core.Data;
using PaytmApp.BoundedContext.Main;

namespace PaytmApp.UnitOfWork.Main
{
    public class MovieUow : BaseUow, IMovieUow
    {
        public MovieUow(IMovieContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IMovieUow : ICoreUnitOfWork { }
}


