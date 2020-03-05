using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PaytmApp.Domain.MovieModule;
using PaytmApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace PaytmApp.Api.Controllers.MovieModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class MovieController : BaseDomainController<Movie,Movie>

    {
        public MovieController(IMovieDomain domain):base(domain) {}

    }
}
