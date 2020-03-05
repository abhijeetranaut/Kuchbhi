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
	public class FashionSubCategoryController : BaseDomainController<FashionSubCategory, FashionSubCategory>

    {
        public FashionSubCategoryController(IFashionSubCategoryDomain domain):base(domain) {}

    }
}
