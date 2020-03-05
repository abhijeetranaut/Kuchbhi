import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Flight } from '@app/models';

export class AbstractFlight extends RxHttp {
    flightFormGroup: IFormGroup<Flight>
}
