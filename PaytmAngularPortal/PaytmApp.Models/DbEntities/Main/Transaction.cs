using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PaytmApp.Models.Enums.Main;
using PaytmApp.BoundedContext.SqlContext;
namespace PaytmApp.Models.Main
{
    [Table("Transactions",Schema="dbo")]
    public partial class Transaction
    {
		#region TransactionId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion TransactionId Annotations

        public int TransactionId { get; set; }

		#region ApplicationObjectId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion ApplicationObjectId Annotations

        public int ApplicationObjectId { get; set; }

		#region TransactionDate Annotations

        [Required]
		#endregion TransactionDate Annotations

        public System.DateTime TransactionDate { get; set; }

		#region PaytmUserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("PaytmUsers","dbo","","PaytmUserId")]
		#endregion PaytmUserId Annotations

        public int PaytmUserId { get; set; }

		#region ReceiverId Annotations

        [Required]
        [MaxLength(10)]
		#endregion ReceiverId Annotations

        public string ReceiverId { get; set; }

		#region PaytmUser Annotations

        [ForeignKey(nameof(PaytmUserId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.PaytmUser.Transactions))]
		#endregion PaytmUser Annotations

        public virtual PaytmUser PaytmUser { get; set; }

		#region Wallets Annotations

        [InverseProperty("Transaction")]
		#endregion Wallets Annotations

        public virtual ICollection<Wallet> Wallets { get; set; }


        public Transaction()
        {
			Wallets = new HashSet<Wallet>();
        }
	}
}