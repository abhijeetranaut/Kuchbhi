import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class AadharDetailBase {

//#region aadharId Prop
        @prop()
        aadharId : number;
//#endregion aadharId Prop


//#region mobileNumber Prop
        @required()
        @maxLength({value:20})
        mobileNumber : string;
//#endregion mobileNumber Prop


//#region aadharNumber Prop
        @required()
        @maxLength({value:20})
        aadharNumber : string;
//#endregion aadharNumber Prop

}