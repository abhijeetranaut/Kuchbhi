using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using PaytmApp.UnitOfWork.Main;
using PaytmApp.Models.Main;

namespace PaytmApp.Domain.MovieModule
{
    public class MovieDomain : IMovieDomain
    {
        public MovieDomain(IMovieUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(Movie parameters)
        {
            return await Uow.Repository<Movie>().AllAsync();
        }

        public async Task<object> GetBy(Movie parameters)
        {
            return await Uow.Repository<Movie>().FindByAsync(t => t.MovieId == parameters.MovieId);
        }
        

        public HashSet<string> AddValidation(Movie entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Movie entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(Movie entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Movie entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(Movie parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Movie parameters)
        {
            throw new NotImplementedException();
        }

        public IMovieUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IMovieDomain : ICoreDomain<Movie, Movie> { }
}
