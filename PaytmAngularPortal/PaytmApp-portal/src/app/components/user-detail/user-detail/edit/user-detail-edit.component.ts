import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractUserDetail } from '../domain/abstract-user-detail';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { UserDetail } from '@app/models';

@Component({
    selector: "app-user-detail-edit",
    templateUrl: './user-detail-edit.component.html'
})
export class UserDetailEditComponent extends AbstractUserDetail implements OnInit, OnDestroy {
    userDetail: UserDetail;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.userDetailFormGroup = this.formBuilder.formGroup(UserDetail,t) as IFormGroup<UserDetail>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
