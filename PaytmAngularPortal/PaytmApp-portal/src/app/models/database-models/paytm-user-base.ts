import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class PaytmUserBase {

//#region paytmUserId Prop
        @prop()
        paytmUserId : number;
//#endregion paytmUserId Prop


//#region mobileNumber Prop
        @required()
        @maxLength({value:10})
        mobileNumber : string;
//#endregion mobileNumber Prop


//#region emailId Prop
        @required()
        @maxLength({value:30})
        emailId : string;
//#endregion emailId Prop


//#region password Prop
        @required()
        @maxLength({value:15})
        password : string;
//#endregion password Prop


//#region kYCStatus Prop
        @required()
        kYCStatus : boolean;
//#endregion kYCStatus Prop





















}