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
    [Table("FashionProducts",Schema="dbo")]
    public partial class FashionProduct
    {
		#region FashionProductId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion FashionProductId Annotations

        public int FashionProductId { get; set; }

		#region FashionSubCategoryId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("FashionSubCategories","dbo","","FashionSubCategoryId")]
		#endregion FashionSubCategoryId Annotations

        public int FashionSubCategoryId { get; set; }

		#region SellerProductId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("SellerProducts","dbo","","SellerProductId")]
		#endregion SellerProductId Annotations

        public int SellerProductId { get; set; }

		#region FashionSubCategory Annotations

        [ForeignKey(nameof(FashionSubCategoryId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.FashionSubCategory.FashionProducts))]
		#endregion FashionSubCategory Annotations

        public virtual FashionSubCategory FashionSubCategory { get; set; }

		#region SellerProduct Annotations

        [ForeignKey(nameof(SellerProductId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.SellerProduct.FashionProducts))]
		#endregion SellerProduct Annotations

        public virtual SellerProduct SellerProduct { get; set; }

		#region Carts Annotations

        [InverseProperty("FashionProduct")]
		#endregion Carts Annotations

        public virtual ICollection<Cart> Carts { get; set; }


        public FashionProduct()
        {
			Carts = new HashSet<Cart>();
        }
	}
}