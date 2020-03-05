using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PaytmApp.BoundedContext.SqlContext;
namespace PaytmApp.Models.Main
{
    [Table("vFashionProducts",Schema="dbo")]
    public partial class vFashionProduct
    {

        public string BrandName { get; set; }

		#region FashionProductId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion FashionProductId Annotations

        public int FashionProductId { get; set; }


        public int FashionSubCategoryId { get; set; }


        public string ProductName { get; set; }


        public double Price { get; set; }


        public int FashionCategoryId { get; set; }


        public string Description { get; set; }


        public vFashionProduct()
        {
        }
	}
}