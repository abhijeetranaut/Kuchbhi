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
    [Table("Wallets",Schema="dbo")]
    public partial class Wallet
    {
		#region WalletId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion WalletId Annotations

        public int WalletId { get; set; }

		#region PaytmUserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("PaytmUsers","dbo","","PaytmUserId")]
		#endregion PaytmUserId Annotations

        public int PaytmUserId { get; set; }

		#region Balance Annotations

        [Required]
		#endregion Balance Annotations

        public double Balance { get; set; }

		#region TransactionId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Transactions","dbo","","TransactionId")]
		#endregion TransactionId Annotations

        public int TransactionId { get; set; }

		#region PaytmUser Annotations

        [ForeignKey(nameof(PaytmUserId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.PaytmUser.Wallets))]
		#endregion PaytmUser Annotations

        public virtual PaytmUser PaytmUser { get; set; }

		#region Transaction Annotations

        [ForeignKey(nameof(TransactionId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.Transaction.Wallets))]
		#endregion Transaction Annotations

        public virtual Transaction Transaction { get; set; }


        public Wallet()
        {
        }
	}
}