using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PaytmApp.BoundedContext.SqlContext;
namespace PaytmApp.Models.Main
{
    [Table("vCartItems",Schema="dbo")]
    public partial class vCartItem
    {

        public string BrandName { get; set; }

		#region PaytmUserId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion PaytmUserId Annotations

        public int PaytmUserId { get; set; }


        public int ProductQuantity { get; set; }


        public int FashionProductId { get; set; }


        public double TotalAmount { get; set; }


        public string FashionCategoryName { get; set; }


        public string FashionSubCategoryName { get; set; }


        public string SellerName { get; set; }


        public string ProductName { get; set; }


        public double Price { get; set; }


        public string Description { get; set; }


        public int BrandId { get; set; }


        public vCartItem()
        {
        }
	}
}