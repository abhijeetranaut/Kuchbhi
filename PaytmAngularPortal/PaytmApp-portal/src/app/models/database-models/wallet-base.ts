import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class WalletBase {

//#region walletId Prop
        @prop()
        walletId : number;
//#endregion walletId Prop


//#region paytmUserId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paytmUserId : number;
//#endregion paytmUserId Prop


//#region balance Prop
        @required()
        balance : any;
//#endregion balance Prop


//#region transactionId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        transactionId : number;
//#endregion transactionId Prop





}