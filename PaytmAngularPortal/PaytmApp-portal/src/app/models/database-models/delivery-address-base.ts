import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class DeliveryAddressBase {

//#region deliveryAddressId Prop
        @prop()
        deliveryAddressId : number;
//#endregion deliveryAddressId Prop


//#region paytmUserId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paytmUserId : number;
//#endregion paytmUserId Prop


//#region fullName Prop
        @required()
        @maxLength({value:20})
        fullName : string;
//#endregion fullName Prop


//#region address Prop
        @required()
        @maxLength({value:50})
        address : string;
//#endregion address Prop


//#region cityId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        cityId : number;
//#endregion cityId Prop





}