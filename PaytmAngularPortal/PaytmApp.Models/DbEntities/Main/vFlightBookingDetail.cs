using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using PaytmApp.BoundedContext.SqlContext;
namespace PaytmApp.Models.Main
{
    [Table("vFlightBookingDetail",Schema="dbo")]
    public partial class vFlightBookingDetail
    {

        public string FirstName { get; set; }


        public string LastName { get; set; }

		#region Age Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion Age Annotations

        public int Age { get; set; }


        public string EmailId { get; set; }


        public string ContactNumber { get; set; }


        public int BookingMasterId { get; set; }


        public int ApplicationObjectId { get; set; }


        public int FlightId { get; set; }


        public Nullable<int> EconomyPrice { get; set; }


        public string DayOfFlight { get; set; }


        public int Duration { get; set; }


        public System.DateTime ArrivalTime { get; set; }


        public System.DateTime DepartureTime { get; set; }


        public string Destination { get; set; }


        public string Source { get; set; }


        public string Airline { get; set; }


        public int PaytmUserId { get; set; }


        public int NumberOfTravellers { get; set; }


        public System.DateTime DepartureDate { get; set; }


        public string ApplicationObjectName { get; set; }


        public int Id { get; set; }


        public Nullable<int> BusinessPrice { get; set; }


        public int FlightBookingId { get; set; }


        public int FlightTravellerId { get; set; }


        public vFlightBookingDetail()
        {
        }
	}
}