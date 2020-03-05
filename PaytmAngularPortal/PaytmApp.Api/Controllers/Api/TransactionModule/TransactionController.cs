using Microsoft.AspNetCore.Mvc;
using System.Linq;
using PaytmApp.Domain.TransactionModule;
using PaytmApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace PaytmApp.Api.Controllers.TransactionModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class TransactionController : BaseDomainController<Transaction, Transaction>

    {
        public TransactionController(ITransactionDomain domain):base(domain) {}

    }
}
