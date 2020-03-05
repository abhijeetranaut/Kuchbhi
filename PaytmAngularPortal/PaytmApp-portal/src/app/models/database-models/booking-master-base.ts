import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BookingMasterBase {

//#region bookingMasterId Prop
        @prop()
        bookingMasterId : number;
//#endregion bookingMasterId Prop


//#region applicationObjectId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        applicationObjectId : number;
//#endregion applicationObjectId Prop


//#region paytmUserId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paytmUserId : number;
//#endregion paytmUserId Prop


//#region departureDate Prop
        @required()
        departureDate : Date;
//#endregion departureDate Prop


//#region returnDate Prop
        @prop()
        returnDate : Date;
//#endregion returnDate Prop


//#region numberOfTravellers Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        numberOfTravellers : number;
//#endregion numberOfTravellers Prop







}