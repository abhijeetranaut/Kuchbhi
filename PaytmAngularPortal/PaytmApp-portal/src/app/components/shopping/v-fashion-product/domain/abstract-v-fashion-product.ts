import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vFashionProduct } from '@app/models';
import { anonymous } from '@rxweb/angular-router';
@anonymous()
@http({
    hostKey:"local",
    path:"api/vFashionProduct",
})

export class AbstractvFashionProduct extends RxHttp {
    vFashionProductFormGroup: IFormGroup<vFashionProduct>
}
