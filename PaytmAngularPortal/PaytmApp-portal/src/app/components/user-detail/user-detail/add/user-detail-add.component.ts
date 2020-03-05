import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { UserDetail } from '@app/models';
import { AbstractUserDetail } from '../domain/abstract-user-detail';

@Component({
    selector: "app-user-detail-add",
    templateUrl: './user-detail-add.component.html'
})
export class UserDetailAddComponent extends AbstractUserDetail implements OnInit, OnDestroy {
    userDetail: UserDetail;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.userDetail = new UserDetail();
        this.userDetailFormGroup = this.formBuilder.formGroup(this.userDetail) as IFormGroup<UserDetail>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
