import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { KycDetail } from '@app/models';
import { AbstractKyc } from '../domain/abstract-kyc';

@Component({
    selector: "app-kyc-add",
    templateUrl: './kyc-add.component.html'
})
export class KycAddComponent extends AbstractKyc implements OnInit, OnDestroy {
    kyc: KycDetail;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.kyc = new KycDetail();
        this.kycFormGroup = this.formBuilder.formGroup(this.kyc) as IFormGroup<KycDetail>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
