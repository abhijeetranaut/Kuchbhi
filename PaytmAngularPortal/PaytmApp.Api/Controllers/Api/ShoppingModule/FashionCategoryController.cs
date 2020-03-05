using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PaytmApp.Domain.ShoppingModule;
using PaytmApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using Microsoft.AspNetCore.Authorization;

namespace PaytmApp.Api.Controllers.ShoppingModule
{
    [ApiController]
    [Route("api/[controller]")]
	[AllowAnonymous]
	public class FashionCategoryController : BaseDomainController<FashionCategory, FashionCategory>

    {
        public FashionCategoryController(IFashionCategoryDomain domain):base(domain) {}

    }
}
