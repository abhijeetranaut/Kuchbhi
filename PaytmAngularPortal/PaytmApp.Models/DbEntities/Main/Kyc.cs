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
    [Table("Kyc",Schema="dbo")]
    public partial class Kyc
    {
		#region KycId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion KycId Annotations

        public int KycId { get; set; }


        public Nullable<bool> KycStatus { get; set; }

		#region UAadharNumber Annotations

        [Required]
        [MaxLength(20)]
		#endregion UAadharNumber Annotations

        public string UAadharNumber { get; set; }

		#region KycVerifyNumber Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion KycVerifyNumber Annotations

        public int KycVerifyNumber { get; set; }


        public Kyc()
        {
        }
	}
}