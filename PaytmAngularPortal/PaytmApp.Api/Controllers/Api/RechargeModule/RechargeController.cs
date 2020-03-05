using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PaytmApp.Domain.RechargeModule;
using PaytmApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace PaytmApp.Api.Controllers.RechargeModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class RechargeController : BaseDomainController<Recharge, Recharge>

    {
        public RechargeController(IRechargeDomain domain):base(domain) {}

    }
}
