import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { FashionProduct } from '@app/models';

export class AbstractFashionProduct extends RxHttp {
    fashionProductFormGroup: IFormGroup<FashionProduct>
}
