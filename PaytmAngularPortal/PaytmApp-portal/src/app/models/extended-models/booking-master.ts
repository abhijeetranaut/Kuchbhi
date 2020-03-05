import {BookingMasterBase} from '../database-models/booking-master-base';
import {PaytmUserBase} from '../database-models/paytm-user-base';
import {BusBookingBase} from '../database-models/bus-booking-base';
import {FlightBookingBase} from '../database-models/flight-booking-base';
//Generated Imports
export class BookingMaster extends BookingMasterBase 
{




//#region Generated Reference Properties
//#region paytmUser Prop
paytmUser : PaytmUserBase;
//#endregion paytmUser Prop
//#region busBookings Prop
busBookings : BusBookingBase[];
//#endregion busBookings Prop
//#region flightBookings Prop
flightBookings : FlightBookingBase[];
//#endregion flightBookings Prop

//#endregion Generated Reference Properties


}