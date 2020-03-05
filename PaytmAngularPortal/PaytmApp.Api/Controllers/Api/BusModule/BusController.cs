using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PaytmApp.Domain.BusModule;
using PaytmApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace PaytmApp.Api.Controllers.BusModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class BusController : BaseDomainController<Bus, Bus>

    {
        public BusController(IBusDomain domain):base(domain) {}

    }
}
