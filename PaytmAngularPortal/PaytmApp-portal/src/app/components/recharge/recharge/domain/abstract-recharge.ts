import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Recharge } from '@app/models';

export class AbstractRecharge extends RxHttp {
    rechargeFormGroup: IFormGroup<Recharge>
}
