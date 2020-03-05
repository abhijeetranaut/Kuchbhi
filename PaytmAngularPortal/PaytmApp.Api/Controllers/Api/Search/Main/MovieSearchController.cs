using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RxWeb.Core.Security;
using RxWeb.Core.Data;
using PaytmApp.Models.ViewModels;
using PaytmApp.BoundedContext.SqlContext;
namespace PaytmApp.Api.Controllers.Module
{
    [ApiController]
	[Route("api/[controller]")]
    public class SearchMovieController : ControllerBase
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public SearchMovieController(IDbContextManager<MainSqlDbContext> dbContextManager) {
            DbContextManager = dbContextManager;
        }

		[HttpPost]
        public async Task<IActionResult> Post([FromBody]Dictionary<string,string> searchParams)
        {
            var spParameter = new SqlParameter[2];
            spParameter[0] = new SqlParameter() { ParameterName = "City", Value = searchParams["City"] };
            spParameter[1] = new SqlParameter() { ParameterName = "MovieName", Value = searchParams["MovieName"] };
            var result = await DbContextManager.StoreProc<StoreProcResult>("[dbo].spSearchMovie", spParameter);
            return Ok(result.SingleOrDefault()?.Result);
        }
    }
}
