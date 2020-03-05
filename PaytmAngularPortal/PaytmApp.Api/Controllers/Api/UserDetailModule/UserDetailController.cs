using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PaytmApp.Domain.UserDetailModule;
using PaytmApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace PaytmApp.Api.Controllers.UserDetailModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class UserDetailController : BaseDomainController<UserDetail, UserDetail>

    {
        public UserDetailController(IUserDetailDomain domain):base(domain) {}

    }
}
