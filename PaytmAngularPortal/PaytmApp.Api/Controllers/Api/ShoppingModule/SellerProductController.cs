using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PaytmApp.Domain.ShoppingModule;
using PaytmApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace PaytmApp.Api.Controllers.ShoppingModule
{
    [ApiController]
    [Route("api/[controller]")]
	[AllowAnnoymous]
	public class SellerProductController : BaseDomainController<SellerProduct, SellerProduct>
     {
        public SellerProductController(ISellerProductDomain domain):base(domain) {}

    }
}
