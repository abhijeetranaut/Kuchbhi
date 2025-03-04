import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class UserDetailBase {

//#region userDetailId Prop
        @prop()
        userDetailId : number;
//#endregion userDetailId Prop


//#region paytmUserId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paytmUserId : number;
//#endregion paytmUserId Prop


//#region firstName Prop
        @required()
        @maxLength({value:20})
        firstName : string;
//#endregion firstName Prop


//#region lastName Prop
        @required()
        @maxLength({value:20})
        lastName : string;
//#endregion lastName Prop


//#region dateOfBirth Prop
        @required()
        @maxLength({value:20})
        dateOfBirth : string;
//#endregion dateOfBirth Prop


//#region gender Prop
        @required()
        @maxLength({value:10})
        gender : string;
//#endregion gender Prop



}