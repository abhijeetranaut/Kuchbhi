using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PaytmApp.Domain.OtpModule;
using PaytmApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace PaytmApp.Api.Controllers.OtpModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class OtpController : BaseDomainController<OTP,OTP>

    {
        public OtpController(IOtpDomain domain):base(domain) {}

    }
}
