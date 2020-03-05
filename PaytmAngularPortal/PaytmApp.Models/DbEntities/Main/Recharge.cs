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
    [Table("Recharges",Schema="dbo")]
    public partial class Recharge
    {
		#region RechargeId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion RechargeId Annotations

        public int RechargeId { get; set; }

		#region PaytmUserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("PaytmUsers","dbo","","PaytmUserId")]
		#endregion PaytmUserId Annotations

        public int PaytmUserId { get; set; }

		#region Operator Annotations

        [Required]
        [MaxLength(10)]
		#endregion Operator Annotations

        public string Operator { get; set; }

		#region Amount Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion Amount Annotations

        public int Amount { get; set; }

		#region PaytmUser Annotations

        [ForeignKey(nameof(PaytmUserId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.PaytmUser.Recharges))]
		#endregion PaytmUser Annotations

        public virtual PaytmUser PaytmUser { get; set; }


        public Recharge()
        {
        }
	}
}