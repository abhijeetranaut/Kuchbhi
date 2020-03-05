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
    [Table("Halls",Schema="dbo")]
    public partial class Hall
    {
		#region HallId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion HallId Annotations

        public int HallId { get; set; }

		#region HallNumber Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion HallNumber Annotations

        public int HallNumber { get; set; }

		#region TheatreId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Theatres","dbo","","TheatreId")]
		#endregion TheatreId Annotations

        public int TheatreId { get; set; }

		#region TotalSeats Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion TotalSeats Annotations

        public int TotalSeats { get; set; }

		#region AvailableSeats Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion AvailableSeats Annotations

        public int AvailableSeats { get; set; }

		#region Theatre Annotations

        [ForeignKey(nameof(TheatreId))]
        [InverseProperty(nameof(PaytmApp.Models.Main.Theatre.Halls))]
		#endregion Theatre Annotations

        public virtual Theatre Theatre { get; set; }

		#region MovieHalls Annotations

        [InverseProperty("Hall")]
		#endregion MovieHalls Annotations

        public virtual ICollection<MovieHall> MovieHalls { get; set; }


        public Hall()
        {
			MovieHalls = new HashSet<MovieHall>();
        }
	}
}