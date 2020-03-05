import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractPaytmUser } from '../domain/abstract-paytm-user';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { PaytmUser } from '@app/models';

@Component({
    selector: "app-paytm-user-edit",
    templateUrl: './paytm-user-edit.component.html'
})
export class PaytmUserEditComponent extends AbstractPaytmUser implements OnInit, OnDestroy {
    paytmUser: PaytmUser;
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
            this.paytmUserFormGroup = this.formBuilder.formGroup(PaytmUser,t) as IFormGroup<PaytmUser>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
