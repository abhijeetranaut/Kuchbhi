using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PaytmApp.Domain.PaytmUserModule;
using PaytmApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace PaytmApp.Api.Controllers.PaytmUserModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class PaytmUsersController : BaseDomainController<PaytmUser, PaytmUser>

    {
        public PaytmUsersController(IPaytmUserDomain domain):base(domain) {}

    }
}
