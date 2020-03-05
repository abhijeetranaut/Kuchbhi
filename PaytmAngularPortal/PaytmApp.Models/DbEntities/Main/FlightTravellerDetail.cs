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
    [Table("FlightTravellerDetails",Schema="dbo")]
    public partial class FlightTravellerDetail
    {
		#region FlightTravellerId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion FlightTravellerId Annotations

        public int FlightTravellerId { get; set; }

		#region FlightBookingId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("FlightBookings","dbo","","FlightBookingId")]
		#endregion FlightBookingId Annotations

        public int FlightBookingId { get; set; }

		#region FirstName Annotations

        [Required]
        [MaxLength(20)]
		#endregion FirstName Annotations

        public string FirstName { get; set; }

		#region LastName Annotations

        [Required]
        [MaxLength(20)]
		#endregion LastName Annotations

        public string LastName { get; set; }

		#region Age Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion Age Annotations

        public int Age { get; set; }

		#region EmailId Annotations

        [Required]
        [MaxLength(20)]
		#endregion EmailId Annotations

        public string EmailId { get; set; }

		#region ContactNumber Annotations

        [Required]
        [MaxLength(15)]
		#endregion ContactNumber Annotations

        public string ContactNumber { get; set; }

		#region FlightBooking Annotations

        [ForeignKey(nameof(FlightBookingId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.FlightBooking.FlightTravellerDetails))]
		#endregion FlightBooking Annotations

        public virtual FlightBooking FlightBooking { get; set; }


        public FlightTravellerDetail()
        {
        }
	}
}