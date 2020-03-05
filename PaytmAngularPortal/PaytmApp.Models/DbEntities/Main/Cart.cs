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
    [Table("Carts",Schema="dbo")]
    public partial class Cart
    {
		#region CartId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CartId Annotations

        public int CartId { get; set; }

		#region FashionProductId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("FashionProducts","dbo","","FashionProductId")]
		#endregion FashionProductId Annotations

        public int FashionProductId { get; set; }

		#region ProductQuantity Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion ProductQuantity Annotations

        public int ProductQuantity { get; set; }

		#region PaytmUserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("PaytmUsers","dbo","","PaytmUserId")]
		#endregion PaytmUserId Annotations

        public int PaytmUserId { get; set; }

		#region TotalAmount Annotations

        [Required]
		#endregion TotalAmount Annotations

        public double TotalAmount { get; set; }

		#region FashionProduct Annotations

        [ForeignKey(nameof(FashionProductId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.FashionProduct.Carts))]
		#endregion FashionProduct Annotations

        public virtual FashionProduct FashionProduct { get; set; }

		#region PaytmUser Annotations

        [ForeignKey(nameof(PaytmUserId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.PaytmUser.Carts))]
		#endregion PaytmUser Annotations

        public virtual PaytmUser PaytmUser { get; set; }

		#region Orders Annotations

        [InverseProperty("Cart")]
		#endregion Orders Annotations

        public virtual ICollection<Order> Orders { get; set; }


        public Cart()
        {
			Orders = new HashSet<Order>();
        }
	}
}