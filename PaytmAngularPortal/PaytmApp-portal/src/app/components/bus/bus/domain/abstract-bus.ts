import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Bus } from '@app/models';

export class AbstractBus extends RxHttp {
    busFormGroup: IFormGroup<Bus>
}
