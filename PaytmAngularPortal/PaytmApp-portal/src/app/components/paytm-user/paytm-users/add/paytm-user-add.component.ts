import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { PaytmUser } from '@app/models';
import { AbstractPaytmUser } from '../domain/abstract-paytm-user';

@Component({
    selector: "app-paytm-user-add",
    templateUrl: './paytm-user-add.component.html'
})
export class PaytmUserAddComponent extends AbstractPaytmUser implements OnInit, OnDestroy {
    paytmUser: PaytmUser;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.paytmUser = new PaytmUser();
        this.paytmUserFormGroup = this.formBuilder.formGroup(this.paytmUser) as IFormGroup<PaytmUser>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
