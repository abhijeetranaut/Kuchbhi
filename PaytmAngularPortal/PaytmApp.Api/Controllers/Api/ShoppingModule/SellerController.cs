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
	
	public class SellerController : BaseDomainController<Seller, Seller>

    {
        public SellerController(ISellerDomain domain):base(domain) {}

    }
}
