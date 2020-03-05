import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vFlightBookingDetailBase {

//#region firstName Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'firstName', keyColumn: false})
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'lastName', keyColumn: false})
        lastName : string;
//#endregion lastName Prop


//#region age Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'age', keyColumn: true})
        age : number;
//#endregion age Prop


//#region emailId Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'emailId', keyColumn: false})
        emailId : string;
//#endregion emailId Prop


//#region contactNumber Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'contactNumber', keyColumn: false})
        contactNumber : string;
//#endregion contactNumber Prop


//#region bookingMasterId Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'bookingMasterId', keyColumn: false})
        bookingMasterId : number;
//#endregion bookingMasterId Prop


//#region applicationObjectId Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'applicationObjectId', keyColumn: false})
        applicationObjectId : number;
//#endregion applicationObjectId Prop


//#region flightId Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'flightId', keyColumn: false})
        flightId : number;
//#endregion flightId Prop


//#region economyPrice Prop
        @gridColumn({visible: true, columnIndex:8, allowSorting: true, headerKey: 'economyPrice', keyColumn: false})
        economyPrice : any;
//#endregion economyPrice Prop


//#region dayOfFlight Prop
        @gridColumn({visible: true, columnIndex:9, allowSorting: true, headerKey: 'dayOfFlight', keyColumn: false})
        dayOfFlight : string;
//#endregion dayOfFlight Prop


//#region duration Prop
        @gridColumn({visible: true, columnIndex:10, allowSorting: true, headerKey: 'duration', keyColumn: false})
        duration : number;
//#endregion duration Prop


//#region arrivalTime Prop
        @gridColumn({visible: true, columnIndex:11, allowSorting: true, headerKey: 'arrivalTime', keyColumn: false})
        arrivalTime : any;
//#endregion arrivalTime Prop


//#region departureTime Prop
        @gridColumn({visible: true, columnIndex:12, allowSorting: true, headerKey: 'departureTime', keyColumn: false})
        departureTime : any;
//#endregion departureTime Prop


//#region destination Prop
        @gridColumn({visible: true, columnIndex:13, allowSorting: true, headerKey: 'destination', keyColumn: false})
        destination : string;
//#endregion destination Prop


//#region source Prop
        @gridColumn({visible: true, columnIndex:14, allowSorting: true, headerKey: 'source', keyColumn: false})
        source : string;
//#endregion source Prop


//#region airline Prop
        @gridColumn({visible: true, columnIndex:15, allowSorting: true, headerKey: 'airline', keyColumn: false})
        airline : string;
//#endregion airline Prop


//#region paytmUserId Prop
        @gridColumn({visible: true, columnIndex:16, allowSorting: true, headerKey: 'paytmUserId', keyColumn: false})
        paytmUserId : number;
//#endregion paytmUserId Prop


//#region numberOfTravellers Prop
        @gridColumn({visible: true, columnIndex:17, allowSorting: true, headerKey: 'numberOfTravellers', keyColumn: false})
        numberOfTravellers : number;
//#endregion numberOfTravellers Prop


//#region departureDate Prop
        @gridColumn({visible: true, columnIndex:18, allowSorting: true, headerKey: 'departureDate', keyColumn: false})
        departureDate : any;
//#endregion departureDate Prop


//#region applicationObjectName Prop
        @gridColumn({visible: true, columnIndex:19, allowSorting: true, headerKey: 'applicationObjectName', keyColumn: false})
        applicationObjectName : string;
//#endregion applicationObjectName Prop


//#region id Prop
        @gridColumn({visible: true, columnIndex:20, allowSorting: true, headerKey: 'id', keyColumn: false})
        id : number;
//#endregion id Prop


//#region businessPrice Prop
        @gridColumn({visible: true, columnIndex:21, allowSorting: true, headerKey: 'businessPrice', keyColumn: false})
        businessPrice : any;
//#endregion businessPrice Prop


//#region flightBookingId Prop
        @gridColumn({visible: true, columnIndex:22, allowSorting: true, headerKey: 'flightBookingId', keyColumn: false})
        flightBookingId : number;
//#endregion flightBookingId Prop


//#region flightTravellerId Prop
        @gridColumn({visible: true, columnIndex:23, allowSorting: true, headerKey: 'flightTravellerId', keyColumn: false})
        flightTravellerId : number;
//#endregion flightTravellerId Prop

}