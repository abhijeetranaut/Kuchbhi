import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { BankCardDetail } from '@app/models';

export class AbstractBankCardDetail extends RxHttp {
    bankCardDetailFormGroup: IFormGroup<BankCardDetail>
}
