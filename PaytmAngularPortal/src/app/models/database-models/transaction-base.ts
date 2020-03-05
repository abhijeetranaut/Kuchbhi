import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class TransactionBase {

//#region transactionId Prop
        @prop()
        transactionId : number;
//#endregion transactionId Prop


//#region applicationObjectId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        applicationObjectId : number;
//#endregion applicationObjectId Prop


//#region transactionDate Prop
        @required()
        transactionDate : Date;
//#endregion transactionDate Prop


//#region paytmUserId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paytmUserId : number;
//#endregion paytmUserId Prop


//#region receiverId Prop
        @required()
        @maxLength({value:10})
        receiverId : string;
//#endregion receiverId Prop


//#region walletId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        walletId : number;
//#endregion walletId Prop


//#region amount Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        amount : number;
//#endregion amount Prop





}