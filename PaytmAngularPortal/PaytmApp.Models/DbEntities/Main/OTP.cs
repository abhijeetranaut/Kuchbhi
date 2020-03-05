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
    [Table("OTPs",Schema="dbo")]
    public partial class OTP
    {
		#region OTPId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion OTPId Annotations

        public int OTPId { get; set; }

		#region PaytmUserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("PaytmUsers","dbo","","PaytmUserId")]
		#endregion PaytmUserId Annotations

        public int PaytmUserId { get; set; }

		#region OtpNumber Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion OtpNumber Annotations

        public int OtpNumber { get; set; }

		#region ActivateTime Annotations

        [Required]
		#endregion ActivateTime Annotations

        public System.DateTime ActivateTime { get; set; }

		#region DeactivateTime Annotations

        [Required]
		#endregion DeactivateTime Annotations

        public System.DateTime DeactivateTime { get; set; }

		#region PaytmUser Annotations

        [ForeignKey(nameof(PaytmUserId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.PaytmUser.OTPs))]
		#endregion PaytmUser Annotations

        public virtual PaytmUser PaytmUser { get; set; }


        public OTP()
        {
        }
	}
}