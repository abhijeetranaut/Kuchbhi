import { RxHttp ,http} from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { FashionSubCategory } from '@app/models';
import { anonymous } from '@rxweb/angular-router';
@anonymous()
@http({
    hostKey:"local",
    path:"api/FashionSubCategory",
})
export class AbstractFashionSubCategory extends RxHttp {
    fashionSubCategoryFormGroup: IFormGroup<FashionSubCategory>
}
