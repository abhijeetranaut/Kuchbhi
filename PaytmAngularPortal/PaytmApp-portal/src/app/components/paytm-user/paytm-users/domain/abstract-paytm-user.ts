import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { PaytmUser } from '@app/models';

export class AbstractPaytmUser extends RxHttp {
    paytmUserFormGroup: IFormGroup<PaytmUser>
}
