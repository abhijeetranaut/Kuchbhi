using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PaytmApp.BoundedContext.SqlContext;
namespace PaytmApp.Models.Main
{
    [Table("vMovieBook",Schema="dbo")]
    public partial class vMovieBook
    {
		#region Price Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion Price Annotations

        public int Price { get; set; }


        public int ShowTime { get; set; }


        public string MovieName { get; set; }


        public string CityName { get; set; }


        public int HallNumber { get; set; }


        public string TheatreName { get; set; }


        public string TheatreAddress { get; set; }


        public string ApplicationObjectName { get; set; }


        public int ApplicationObjectId { get; set; }


        public int Expr1 { get; set; }


        public vMovieBook()
        {
        }
	}
}