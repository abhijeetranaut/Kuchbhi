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
    [Table("UserDetails",Schema="dbo")]
    public partial class UserDetail
    {
		#region UserDetailId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion UserDetailId Annotations

        public int UserDetailId { get; set; }

		#region PaytmUserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("PaytmUsers","dbo","","PaytmUserId")]
		#endregion PaytmUserId Annotations

        public int PaytmUserId { get; set; }

		#region FirstName Annotations

        [Required]
        [MaxLength(20)]
		#endregion FirstName Annotations

        public string FirstName { get; set; }

		#region LastName Annotations

        [Required]
        [MaxLength(20)]
		#endregion LastName Annotations

        public string LastName { get; set; }

		#region DateOfBirth Annotations

        [Required]
		#endregion DateOfBirth Annotations

        public System.DateTime DateOfBirth { get; set; }

		#region ApplicationObjectId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion ApplicationObjectId Annotations

        public int ApplicationObjectId { get; set; }

		#region PaytmUser Annotations

        [ForeignKey(nameof(PaytmUserId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.PaytmUser.UserDetails))]
		#endregion PaytmUser Annotations

        public virtual PaytmUser PaytmUser { get; set; }


        public UserDetail()
        {
        }
	}
}