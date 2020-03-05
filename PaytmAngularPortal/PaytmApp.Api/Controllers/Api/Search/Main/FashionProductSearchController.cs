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
    public class SearchFashionProductController : ControllerBase
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public SearchFashionProductController(IDbContextManager<MainSqlDbContext> dbContextManager) {
            DbContextManager = dbContextManager;
        }

		[HttpPost]
        public async Task<IActionResult> Post([FromBody]Dictionary<string,string> searchParams)
        {
            var spParameters = new SqlParameter[2];
            spParameters[0] = new SqlParameter() { ParameterName = "BrandName", Value = searchParams["BrandName"] };
            spParameters[1] = new SqlParameter() { ParameterName = "CategoryName", Value = searchParams["CategoryName"] };

            var result = await DbContextManager.StoreProc<StoreProcResult>("[dbo].spSearchFashionProducts", spParameters);
            return Ok(result.SingleOrDefault()?.Result);
        }
    }
}
