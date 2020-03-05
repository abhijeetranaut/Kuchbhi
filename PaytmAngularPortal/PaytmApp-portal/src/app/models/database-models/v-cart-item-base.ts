import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vCartItemBase {

//#region brandName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'brandName', keyColumn: false})
        brandName : string;
//#endregion brandName Prop


//#region paytmUserId Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'paytmUserId', keyColumn: true})
        paytmUserId : number;
//#endregion paytmUserId Prop


//#region productQuantity Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'productQuantity', keyColumn: false})
        productQuantity : number;
//#endregion productQuantity Prop


//#region fashionProductId Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'fashionProductId', keyColumn: false})
        fashionProductId : number;
//#endregion fashionProductId Prop


//#region totalAmount Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'totalAmount', keyColumn: false})
        totalAmount : any;
//#endregion totalAmount Prop


//#region fashionCategoryName Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'fashionCategoryName', keyColumn: false})
        fashionCategoryName : string;
//#endregion fashionCategoryName Prop


//#region fashionSubCategoryName Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'fashionSubCategoryName', keyColumn: false})
        fashionSubCategoryName : string;
//#endregion fashionSubCategoryName Prop


//#region sellerName Prop
        @gridColumn({visible: true, columnIndex:8, allowSorting: true, headerKey: 'sellerName', keyColumn: false})
        sellerName : string;
//#endregion sellerName Prop


//#region productName Prop
        @gridColumn({visible: true, columnIndex:9, allowSorting: true, headerKey: 'productName', keyColumn: false})
        productName : string;
//#endregion productName Prop


//#region price Prop
        @gridColumn({visible: true, columnIndex:10, allowSorting: true, headerKey: 'price', keyColumn: false})
        price : any;
//#endregion price Prop


//#region description Prop
        @gridColumn({visible: true, columnIndex:11, allowSorting: true, headerKey: 'description', keyColumn: false})
        description : string;
//#endregion description Prop


//#region brandId Prop
        @gridColumn({visible: true, columnIndex:12, allowSorting: true, headerKey: 'brandId', keyColumn: false})
        brandId : number;
//#endregion brandId Prop

}