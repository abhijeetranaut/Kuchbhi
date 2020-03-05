import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class RechargeBase {

//#region rechargeId Prop
        @prop()
        rechargeId : number;
//#endregion rechargeId Prop


//#region paytmUserId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paytmUserId : number;
//#endregion paytmUserId Prop


//#region operator Prop
        @required()
        @maxLength({value:10})
        operator : string;
//#endregion operator Prop


//#region amount Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        amount : number;
//#endregion amount Prop



}