import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { SellerProduct } from '@app/models';
import { anonymous } from '@rxweb/angular-router';
@anonymous()
@http({
    hostKey:"local",
    path:"api/SellerProduct",

})
export class AbstractSellerProduct extends RxHttp {
    sellerProductFormGroup: IFormGroup<SellerProduct>
}
