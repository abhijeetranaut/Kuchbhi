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
    [Table("AadharDetails",Schema="dbo")]
    public partial class AadharDetail
    {
		#region AadharId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion AadharId Annotations

        public int AadharId { get; set; }

		#region MobileNumber Annotations

        [Required]
        [MaxLength(20)]
		#endregion MobileNumber Annotations

        public string MobileNumber { get; set; }

		#region AadharNumber Annotations

        [Required]
        [MaxLength(20)]
		#endregion AadharNumber Annotations

        public string AadharNumber { get; set; }


        public AadharDetail()
        {
        }
	}
}