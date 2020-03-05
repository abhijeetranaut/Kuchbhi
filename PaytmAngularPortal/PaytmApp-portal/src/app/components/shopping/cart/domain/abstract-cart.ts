import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Cart } from '@app/models';

export class AbstractCart extends RxHttp {
    cartFormGroup: IFormGroup<Cart>
}
