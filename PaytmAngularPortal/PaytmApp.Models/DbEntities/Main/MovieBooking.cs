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
    [Table("MovieBookings",Schema="dbo")]
    public partial class MovieBooking
    {
		#region MovieBookingId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion MovieBookingId Annotations

        public int MovieBookingId { get; set; }

		#region ApplicationObjectId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion ApplicationObjectId Annotations

        public int ApplicationObjectId { get; set; }

		#region MovieHallId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("MovieHalls","dbo","","MovieHallId")]
		#endregion MovieHallId Annotations

        public int MovieHallId { get; set; }

		#region PaytmUserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("PaytmUsers","dbo","","PaytmUserId")]
		#endregion PaytmUserId Annotations

        public int PaytmUserId { get; set; }

		#region BookedSeats Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion BookedSeats Annotations

        public int BookedSeats { get; set; }

		#region MovieHall Annotations

        [ForeignKey(nameof(MovieHallId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.MovieHall.MovieBookings))]
		#endregion MovieHall Annotations

        public virtual MovieHall MovieHall { get; set; }

		#region PaytmUser Annotations

        [ForeignKey(nameof(PaytmUserId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.PaytmUser.MovieBookings))]
		#endregion PaytmUser Annotations

        public virtual PaytmUser PaytmUser { get; set; }


        public MovieBooking()
        {
        }
	}
}