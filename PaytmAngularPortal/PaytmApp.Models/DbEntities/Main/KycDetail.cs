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
    [Table("KycDetails",Schema="dbo")]
    public partial class KycDetail
    {
		#region KycDetailId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion KycDetailId Annotations

        public int KycDetailId { get; set; }

		#region PaytmUserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("PaytmUsers","dbo","","PaytmUserId")]
		#endregion PaytmUserId Annotations

        public int PaytmUserId { get; set; }

		#region AadharNumber Annotations

        [Required]
		#endregion AadharNumber Annotations

        public long AadharNumber { get; set; }

		#region AadharAddress Annotations

        [Required]
        [MaxLength(50)]
		#endregion AadharAddress Annotations

        public string AadharAddress { get; set; }

		#region AadharName Annotations

        [Required]
        [MaxLength(20)]
		#endregion AadharName Annotations

        public string AadharName { get; set; }

		#region KycVerifyNumber Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion KycVerifyNumber Annotations

        public int KycVerifyNumber { get; set; }

		#region PaytmUser Annotations

        [ForeignKey(nameof(PaytmUserId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.PaytmUser.KycDetails))]
		#endregion PaytmUser Annotations

        public virtual PaytmUser PaytmUser { get; set; }


        public KycDetail()
        {
        }
	}
}