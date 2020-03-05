import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Wallet } from '@app/models';

export class AbstractWallet extends RxHttp {
    walletFormGroup: IFormGroup<Wallet>
}
