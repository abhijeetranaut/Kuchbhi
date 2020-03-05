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
    [Table("PaytmUsers",Schema="dbo")]
    public partial class PaytmUser
    {
		#region PaytmUserId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion PaytmUserId Annotations

        public int PaytmUserId { get; set; }

		#region MobileNumber Annotations

        [Required]
        [MaxLength(10)]
		#endregion MobileNumber Annotations

        public string MobileNumber { get; set; }

		#region EmailId Annotations

        [Required]
        [MaxLength(30)]
		#endregion EmailId Annotations

        public string EmailId { get; set; }

		#region Password Annotations

        [Required]
        [MaxLength(15)]
		#endregion Password Annotations

        public string Password { get; set; }

		#region KYCStatus Annotations

        [Required]
		#endregion KYCStatus Annotations

        public bool KYCStatus { get; set; }

		#region Wallets Annotations

        [InverseProperty("PaytmUser")]
		#endregion Wallets Annotations

        public virtual ICollection<Wallet> Wallets { get; set; }

		#region KycDetails Annotations

        [InverseProperty("PaytmUser")]
		#endregion KycDetails Annotations

        public virtual ICollection<KycDetail> KycDetails { get; set; }

		#region Carts Annotations

        [InverseProperty("PaytmUser")]
		#endregion Carts Annotations

        public virtual ICollection<Cart> Carts { get; set; }

		#region MovieBookings Annotations

        [InverseProperty("PaytmUser")]
		#endregion MovieBookings Annotations

        public virtual ICollection<MovieBooking> MovieBookings { get; set; }

		#region BookingMasters Annotations

        [InverseProperty("PaytmUser")]
		#endregion BookingMasters Annotations

        public virtual ICollection<BookingMaster> BookingMasters { get; set; }

		#region DeliveryAddresses Annotations

        [InverseProperty("PaytmUser")]
		#endregion DeliveryAddresses Annotations

        public virtual ICollection<DeliveryAddress> DeliveryAddresses { get; set; }

		#region OTPs Annotations

        [InverseProperty("PaytmUser")]
		#endregion OTPs Annotations

        public virtual ICollection<OTP> OTPs { get; set; }

		#region Recharges Annotations

        [InverseProperty("PaytmUser")]
		#endregion Recharges Annotations

        public virtual ICollection<Recharge> Recharges { get; set; }

		#region Transactions Annotations

        [InverseProperty("PaytmUser")]
		#endregion Transactions Annotations

        public virtual ICollection<Transaction> Transactions { get; set; }

		#region UserDetails Annotations

        [InverseProperty("PaytmUser")]
		#endregion UserDetails Annotations

        public virtual ICollection<UserDetail> UserDetails { get; set; }


        public PaytmUser()
        {
			Wallets = new HashSet<Wallet>();
			KycDetails = new HashSet<KycDetail>();
			Carts = new HashSet<Cart>();
			MovieBookings = new HashSet<MovieBooking>();
			BookingMasters = new HashSet<BookingMaster>();
			DeliveryAddresses = new HashSet<DeliveryAddress>();
			OTPs = new HashSet<OTP>();
			Recharges = new HashSet<Recharge>();
			Transactions = new HashSet<Transaction>();
			UserDetails = new HashSet<UserDetail>();
        }
	}
}