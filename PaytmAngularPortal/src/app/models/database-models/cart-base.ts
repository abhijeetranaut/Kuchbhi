import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CartBase {

//#region cartId Prop
        @prop()
        cartId : number;
//#endregion cartId Prop


//#region fashionProductId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        fashionProductId : number;
//#endregion fashionProductId Prop


//#region productQuantity Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        productQuantity : number;
//#endregion productQuantity Prop


//#region paytmUserId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        paytmUserId : number;
//#endregion paytmUserId Prop


//#region totalAmount Prop
        @required()
        totalAmount : any;
//#endregion totalAmount Prop







}