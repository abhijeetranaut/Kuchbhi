import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vKycVerifyBase {

//#region mobileNumber Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'mobileNumber', keyColumn: false})
        mobileNumber : string;
//#endregion mobileNumber Prop


//#region aadharNumber Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'aadharNumber', keyColumn: false})
        aadharNumber : string;
//#endregion aadharNumber Prop


//#region paytmUserId Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'paytmUserId', keyColumn: true})
        paytmUserId : number;
//#endregion paytmUserId Prop

}