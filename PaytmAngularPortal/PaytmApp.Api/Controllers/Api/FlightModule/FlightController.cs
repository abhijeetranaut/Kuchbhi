using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PaytmApp.Domain.FlightModule;
using PaytmApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace PaytmApp.Api.Controllers.FlightModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class FlightController : BaseDomainController<Flight,Flight>

    {
        public FlightController(IFlightDomain domain):base(domain) {}

    }
}
