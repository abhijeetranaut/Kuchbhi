using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PaytmApp.Domain.Module;
using PaytmApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace PaytmApp.Api.Controllers.Module
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class KycsController : BaseDomainController<Kyc, Kyc>

    {
        public KycsController(IKycDomain domain):base(domain) {}

    }
}
