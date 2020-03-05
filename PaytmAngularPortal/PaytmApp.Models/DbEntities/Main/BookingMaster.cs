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
    [Table("BookingMasters",Schema="dbo")]
    public partial class BookingMaster
    {
		#region BookingMasterId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion BookingMasterId Annotations

        public int BookingMasterId { get; set; }

		#region ApplicationObjectId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion ApplicationObjectId Annotations

        public int ApplicationObjectId { get; set; }

		#region PaytmUserId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("PaytmUsers","dbo","","PaytmUserId")]
		#endregion PaytmUserId Annotations

        public int PaytmUserId { get; set; }

		#region DepartureDate Annotations

        [Required]
		#endregion DepartureDate Annotations

        public System.DateTime DepartureDate { get; set; }


        public Nullable<System.DateTime> ReturnDate { get; set; }

		#region NumberOfTravellers Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion NumberOfTravellers Annotations

        public int NumberOfTravellers { get; set; }

		#region PaytmUser Annotations

        [ForeignKey(nameof(PaytmUserId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.PaytmUser.BookingMasters))]
		#endregion PaytmUser Annotations

        public virtual PaytmUser PaytmUser { get; set; }

		#region BusBookings Annotations

        [InverseProperty("BookingMaster")]
		#endregion BusBookings Annotations

        public virtual ICollection<BusBooking> BusBookings { get; set; }

		#region FlightBookings Annotations

        [InverseProperty("BookingMaster")]
		#endregion FlightBookings Annotations

        public virtual ICollection<FlightBooking> FlightBookings { get; set; }


        public BookingMaster()
        {
			BusBookings = new HashSet<BusBooking>();
			FlightBookings = new HashSet<FlightBooking>();
        }
	}
}