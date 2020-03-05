import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class KycBase {

//#region kycId Prop
        @prop()
        kycId : number;
//#endregion kycId Prop


//#region kycStatus Prop
        @prop()
        kycStatus : boolean;
//#endregion kycStatus Prop


//#region uAadharNumber Prop
        @required()
        @maxLength({value:20})
        uAadharNumber : string;
//#endregion uAadharNumber Prop


//#region kycVerifyNumber Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        kycVerifyNumber : number;
//#endregion kycVerifyNumber Prop

}