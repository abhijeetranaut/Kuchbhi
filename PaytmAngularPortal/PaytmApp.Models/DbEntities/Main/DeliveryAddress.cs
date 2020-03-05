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
    [Table("DeliveryAddresses",Schema="dbo")]
    public partial class DeliveryAddress
    {
		#region DeliveryAddressId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion DeliveryAddressId Annotations

        public int DeliveryAddressId { get; set; }

		#region PaytmUserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("PaytmUsers","dbo","","PaytmUserId")]
		#endregion PaytmUserId Annotations

        public int PaytmUserId { get; set; }

		#region FullName Annotations

        [Required]
        [MaxLength(20)]
		#endregion FullName Annotations

        public string FullName { get; set; }

		#region Address Annotations

        [Required]
        [MaxLength(50)]
		#endregion Address Annotations

        public string Address { get; set; }

		#region CityId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion CityId Annotations

        public int CityId { get; set; }

		#region PaytmUser Annotations

        [ForeignKey(nameof(PaytmUserId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.PaytmUser.DeliveryAddresses))]
		#endregion PaytmUser Annotations

        public virtual PaytmUser PaytmUser { get; set; }

		#region Orders Annotations

        [InverseProperty("DeliveryAddress")]
		#endregion Orders Annotations

        public virtual ICollection<Order> Orders { get; set; }


        public DeliveryAddress()
        {
			Orders = new HashSet<Order>();
        }
	}
}