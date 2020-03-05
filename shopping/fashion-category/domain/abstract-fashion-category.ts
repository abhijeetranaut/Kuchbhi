import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { FashionCategory, FashionSubCategory } from '@app/models';
import { anonymous } from '@rxweb/angular-router';
@anonymous()
@http({
    hostKey:"local",
    path:"api/FashionCategory",
})
export class AbstractFashionCategory extends RxHttp {
    fashionCategoryFormGroup: IFormGroup<FashionCategory>
}
