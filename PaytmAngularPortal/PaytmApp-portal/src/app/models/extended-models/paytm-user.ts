import {PaytmUserBase} from '../database-models/paytm-user-base';
import {WalletBase} from '../database-models/wallet-base';
import {KycDetailBase} from '../database-models/kyc-detail-base';
import {CartBase} from '../database-models/cart-base';
import {MovieBookingBase} from '../database-models/movie-booking-base';
import {BookingMasterBase} from '../database-models/booking-master-base';
import {DeliveryAddressBase} from '../database-models/delivery-address-base';
import {OTPBase} from '../database-models/o-t-p-base';
import {RechargeBase} from '../database-models/recharge-base';
import {TransactionBase} from '../database-models/transaction-base';
import {UserDetailBase} from '../database-models/user-detail-base';
//Generated Imports
export class PaytmUser extends PaytmUserBase 
{




//#region Generated Reference Properties
//#region wallets Prop
wallets : WalletBase[];
//#endregion wallets Prop

//#region kycDetails Prop
        kycDetails : KycDetailBase[];
//#endregion kycDetails Prop
//#region carts Prop
carts : CartBase[];
//#endregion carts Prop
//#region movieBookings Prop
movieBookings : MovieBookingBase[];
//#endregion movieBookings Prop
//#region bookingMasters Prop
bookingMasters : BookingMasterBase[];
//#endregion bookingMasters Prop
//#region deliveryAddresses Prop
deliveryAddresses : DeliveryAddressBase[];
//#endregion deliveryAddresses Prop

//#region oTPs Prop
        oTPs : OTPBase[];
//#endregion oTPs Prop
//#region recharges Prop
recharges : RechargeBase[];
//#endregion recharges Prop
//#region transactions Prop
transactions : TransactionBase[];
//#endregion transactions Prop
//#region userDetails Prop
userDetails : UserDetailBase[];
//#endregion userDetails Prop

//#endregion Generated Reference Properties


}