import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vFashionProductBase {

//#region brandName Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'brandName', keyColumn: false})
        brandName : string;
//#endregion brandName Prop


//#region fashionProductId Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'fashionProductId', keyColumn: false})
        fashionProductId : number;
//#endregion fashionProductId Prop


//#region fashionSubCategoryId Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'fashionSubCategoryId', keyColumn: false})
        fashionSubCategoryId : number;
//#endregion fashionSubCategoryId Prop


//#region productName Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'productName', keyColumn: false})
        productName : string;
//#endregion productName Prop


//#region price Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'price', keyColumn: false})
        price : any;
//#endregion price Prop


//#region fashionCategoryId Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'fashionCategoryId', keyColumn: true})
        fashionCategoryId : number;
//#endregion fashionCategoryId Prop


//#region description Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'description', keyColumn: false})
        description : string;
//#endregion description Prop

}