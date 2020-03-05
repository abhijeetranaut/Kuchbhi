using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PaytmApp.BoundedContext.SqlContext;
namespace PaytmApp.Models.Main
{
    [Table("vMovieDetail",Schema="dbo")]
    public partial class vMovieDetail
    {

        public string MovieName { get; set; }


        public string CityName { get; set; }


        public string TheatreName { get; set; }


        public string TheatreAddress { get; set; }

		#region ShowTime Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ShowTime Annotations

        public int ShowTime { get; set; }


        public int Price { get; set; }


        public int MovieId { get; set; }


        public int AvailableSeats { get; set; }


        public int PaytmUserId { get; set; }


        public int BookedSeats { get; set; }


        public string ApplicationObjectName { get; set; }


        public vMovieDetail()
        {
        }
	}
}