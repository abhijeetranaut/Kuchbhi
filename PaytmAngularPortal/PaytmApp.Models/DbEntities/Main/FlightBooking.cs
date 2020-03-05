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
    [Table("FlightBookings",Schema="dbo")]
    public partial class FlightBooking
    {
		#region FlightBookingId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion FlightBookingId Annotations

        public int FlightBookingId { get; set; }

		#region BookingMasterId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("BookingMasters","dbo","","BookingMasterId")]
		#endregion BookingMasterId Annotations

        public int BookingMasterId { get; set; }

		#region FlightId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Flights","dbo","","FlightId")]
		#endregion FlightId Annotations

        public int FlightId { get; set; }

		#region ApplicationObjectId Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion ApplicationObjectId Annotations

        public int ApplicationObjectId { get; set; }

		#region BookingMaster Annotations

        [ForeignKey(nameof(BookingMasterId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.BookingMaster.FlightBookings))]
		#endregion BookingMaster Annotations

        public virtual BookingMaster BookingMaster { get; set; }

		#region Flight Annotations

        [ForeignKey(nameof(FlightId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.Flight.FlightBookings))]
		#endregion Flight Annotations

        public virtual Flight Flight { get; set; }

		#region FlightTravellerDetails Annotations

        [InverseProperty("FlightBooking")]
		#endregion FlightTravellerDetails Annotations

        public virtual ICollection<FlightTravellerDetail> FlightTravellerDetails { get; set; }


        public FlightBooking()
        {
			FlightTravellerDetails = new HashSet<FlightTravellerDetail>();
        }
	}
}