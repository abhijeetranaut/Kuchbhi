import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { KycDetail } from '@app/models';

export class AbstractKyc extends RxHttp {
    kycFormGroup: IFormGroup<KycDetail>
}
