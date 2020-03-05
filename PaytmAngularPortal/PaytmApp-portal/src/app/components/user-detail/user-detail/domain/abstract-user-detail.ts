import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { UserDetail } from '@app/models';

export class AbstractUserDetail extends RxHttp {
    userDetailFormGroup: IFormGroup<UserDetail>
}
